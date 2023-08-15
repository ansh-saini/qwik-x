import {
  integer,
  json,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "./users";
import { type InferModel } from "drizzle-orm";

export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  bio: varchar("bio", { length: 160 }),
  avatar: json("avatar").notNull(),
  cover: json("cover"),
  category: text("category"),
  location: varchar("location", { length: 280 }),
  dob: timestamp("dob"),
  link: text("link"),
});

export type Profile = InferModel<typeof profile, "select">;
export type NewProfile = InferModel<typeof profile, "insert">;