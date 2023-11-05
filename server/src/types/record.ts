import { ObjectId } from "mongoose";

interface HabitRecordDTO {
    _id?: ObjectId | null;
    habitCompletion: boolean;
}

interface TimerRecordDTO {
    _id?: ObjectId | null;
    durationInSeconds: number;
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