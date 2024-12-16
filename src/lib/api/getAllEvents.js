// src/lib/api/getAllEvents.js
import eventsModel from "@/model/event";
import dbConnect from "@/services/mongo";

export default async function getAllEvents() {
  try {
    await dbConnect();
    const allEvents = await eventsModel.find();
    return allEvents;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error(error.message || "Error fetching events");
  }
}
