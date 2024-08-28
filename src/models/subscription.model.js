import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
    {
        subscriber: {
            type: mongoose.Schema.Types.ObjectId, // one who is subscribing
            ref: "User",
            required: true,
        },
        channel: {
            type: mongoose.Schema.Types.ObjectId, // one who is being subscribed
            ref: "User",
        },
    },
    { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
