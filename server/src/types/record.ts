import { ObjectId } from "mongoose";

interface HabitRecordDTO {
    _id?: ObjectId | null;
    habitCompletion: boolean;
    creationTime: Date;
}

interface TimerRecordDTO {
    _id?: ObjectId | null;
    durationInSeconds: number;
    creationTime: Date;
}

interface RecordListDTO {
    typeRecord: "habit" | "timer";
    records: HabitRecordDTO[] | TimerRecordDTO[];
}

export {
    HabitRecordDTO,
    TimerRecordDTO,
    RecordListDTO
}