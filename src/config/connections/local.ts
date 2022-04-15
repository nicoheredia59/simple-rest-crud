import { DataSource } from "typeorm";

const local_connection = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "notes-app",
  entities: [__dirname, "./src/models/*.*"],
  synchronize: true,
  logging: false,
});

const localInit = async () => {
  await local_connection
    .initialize()
    .then(() => {
      console.log(`local database connected`);
    })
    .catch((error) => {
      console.log(error);
      local_connection.destroy();
    });
};

const destroyLocal = async () =>
  await local_connection
    .destroy()
    .then(() => {
      console.log(`disconected`);
    })
    .catch((error) => {
      console.log(`something goes wrong:`, error);
    });

export { localInit, destroyLocal };
