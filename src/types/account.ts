import { Types } from "mongoose";

interface TrackerDTO {
    _id?: Types.ObjectId;
    typeTracker: "habit" | "timer";
    name: string;
    creationTime: Date;
    recordId?: Types.ObjectId;
}

interface AccountDTO {
    email: string;
    password: string;
    trackers: TrackerDTO[];
}

export {
    AccountDTO,
    TrackerDTO
}