import { Types } from "mongoose";

interface TrackerDTO {
    _id?: Types.ObjectId;
    readonly typeTracker: "habit" | "timer";
    name: string;
    readonly creationTime: Date;
    recordId?: Types.ObjectId;
}

interface AccountDTO {
    id?: Types.ObjectId,
    email: string;
    password: string;
    trackers: TrackerDTO[];
}

export {
    AccountDTO,
    TrackerDTO
}