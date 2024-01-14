const { Worker } = require("bullmq");

const sendEmail = async (ms) =>
    new Promise((res, rej) => setTimeout(() => res(), ms * 1000));

const worker = new Worker(
    "email-queue",
    async (job) => {
        console.log("I got a message!", job.id);
        console.log("Processing message");
        console.log("Sending email to ", job.data.email);
        await sendEmail(5);
        console.log("Email sent!");
    },
    {
        connection: {
            host: "127.0.0.1",
            port: 6379,
        },
    }
);
