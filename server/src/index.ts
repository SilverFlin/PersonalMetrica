require('dotenv').config()
import "./db/connection";
import app from "./routes";

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`server running on port ${PORT}`);
});


