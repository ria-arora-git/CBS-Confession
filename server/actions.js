'use server'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPosts() {
  try {
    const posts = await prisma.confessions.findMany();
    return posts; 
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export async function createPost(content) {
  const date = new Date().toDateString;
  
  try {
    const newPost = await prisma.confessions.create({
      data: {
        content: content,
        date: date,
        like: 0,
        love: 0,
        laugh: 0,
      },
    });
    return {
      success: true,
      post: newPost,
    };
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}

export async function updateReactions(cid, type) {
  const validTypes = ['like', 'love', 'laugh'];

  if (!validTypes.includes(type)) {
    console.error(`Invalid reaction type: ${type}`);
    throw new Error(`Invalid reaction type: ${type}`);
  }

  try {
    const post = await prisma.confessions.update({
      where: { cid: cid },
      data: {
        [type]: {
          increment: 1
        }
      },
    });
    return {
      success: true,
      post: post,
    };
  } catch (error) {
    console.error(`Error updating ${type} reaction:`, error);
    throw error;
  }
}
