const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue", {
    connection: {
        host: "127.0.0.1",
        port: 6379,
    },
});

async function init() {
    const res = await notificationQueue.add("email to Rishabh", {
        email: "ranand16@gmail.com",
        subject: "Hello mail.",
        body: "This is body.",
    });
    console.log("job added to queue", res.id);
    return res;
}

init();
