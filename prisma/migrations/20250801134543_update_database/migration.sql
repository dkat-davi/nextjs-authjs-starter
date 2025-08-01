-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "emailVerified" DATETIME,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'common',
    "active" BOOLEAN,
    "image" TEXT
);
INSERT INTO "new_User" ("active", "email", "emailVerified", "id", "image", "name", "password", "role") SELECT "active", "email", "emailVerified", "id", "image", "name", "password", coalesce("role", 'common') AS "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
