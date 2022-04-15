import { DataSource } from "typeorm";

const { HOST, DATABASE_USER, PASSWORD, DATABASE } = process.env;

const plante_scale_connection = new DataSource({
  type: "mysql",
  host: HOST,
  username: DATABASE_USER,
  password: PASSWORD,
  database: DATABASE,
  entities: [__dirname, "./build/models/*.js"],
  ssl: true,
  synchronize: true,
  logging: false,
});

const prodInit = async () => {
  await plante_scale_connection
    .initialize()
    .then(() => {
      console.log(`production database connected`);
    })
    .catch((error) => {
      console.log(error);
      plante_scale_connection.destroy();
    });
};

const destroyProduction = async () =>
  await plante_scale_connection
    .destroy()
    .then(() => {
      console.log(`disconected`);
    })
    .catch((error) => {
      console.log(`something goes wrong:`, error);
    });

export { prodInit, destroyProduction };
