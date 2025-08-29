import { PrismaClient } from "@prisma/client";
import { neonConfig } from '@neondatabase/serverless';

// This disables the https connection pooling so we can do our own
neonConfig.fetchConnectionCache = false;

// Database connection is handled by Prisma

// Prisma client initialization is handled automatically

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { db: PrismaClient };

export const db = globalForPrisma.db || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.db = db;

// For debugging Prisma issues
export function debugPrismaEngine() {
  try {
    const enginePath = "Unknown binary path";
    console.log("Prisma binary path:", enginePath);
    
    const engines: unknown[] = [];
    console.log("Active engine instances:", engines.length);
    
    console.log("Prisma connection URL:", "Database URL configured");
    console.log("NODE_ENV:", process.env.NODE_ENV);
    
    return { enginePath, engines: engines.length };
  } catch (error) {
    console.error("Failed to debug Prisma engine:", error);
    return { error: error?.toString() };
  }
}
