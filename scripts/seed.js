const { db } = require('@vercel/postgres');
const { books, series, worlds } = require('./initial-data.js');

async function seedBooks( client ) {
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS books (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                cover_artist VARCHAR(255) NOT NULL,
                cover_image VARCHAR(255) NOT NULL,
                series INTEGER NOT NULL,
                world INTEGER NOT NULL,
                amazon_link VARCHAR(255) NOT NULL,
                publish_date DATE NOT NULL,
                synopsis TEXT NOT NULL,
                on_sale BOOLEAN NOT NULL,
                audio_book BOOLEAN NOT NULL
            );
        `;
        
        console.log( 'created books table' );

        const insertedBooks = await Promise.all(
            books?.map( ( book ) => client.sql`
                INSERT INTO books (id, title, cover_artist, cover_image, series, world, amazon_link, publish_date, synopsis, on_sale, audio_book)
                VALUES (${book.id}, ${book.title}, ${book.coverArtist}, ${book.coverImage}, ${book.series}, ${book.world}, ${book.amazonLink}, ${book.publishDate}, ${book.synopsis}, ${book.onSale}, ${book.audioBook})
                ON CONFLICT (id) DO NOTHING;
            `)
        );

        console.log( 'seeded books table' );

        return {
          createTable
          , books: insertedBooks
        }
    } catch ( e ) {
        console.error( e );
        throw e;
    }
}

async function seedSeries( client ) {
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS series (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                world INTEGER NOT NULL,
                date_started DATE NOT NULL
            );
        `;
        
        console.log( 'created series table' );

        const insertedSeries = await Promise.all(
          series?.map( ( series ) => client.sql`
            INSERT INTO series (id, name, description, world, date_started)
            VALUES (${series.id}, ${series.name}, ${series.description}, ${series.world}, ${series.dateStarted})
            ON CONFLICT (id) DO NOTHING;
          `)
        );

        console.log( 'seeded series table' ); 

        return {
          createTable
          , series: insertedSeries
        }
    } catch ( e ) {
        console.error( e );
        throw e;
    }
}

async function seedWorlds( client ) {
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS worlds (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT NOT NULL
            );
        `;

        console.log( 'created worlds table' );

        const insertedWorlds = await Promise.all(
          worlds?.map( ( world ) => client.sql`
            INSERT INTO worlds (id, name, description)
            VALUES (${world.id}, ${world.name}, ${world.description})
            ON CONFLICT (id) DO NOTHING;
          `)
        );

        console.log( 'seeded worlds table' ); 

        return {
          createTable
          , worlds: insertedWorlds
        }
    } catch ( e ) {
        console.error( e );
        throw e;
    }
}

async function updateBookData( client ) {
  const newBook = {
      id: 28,
      title: "A Tree in the Clouds (Green Skies Book 1)",
      coverArtist: "@Sacred_templar",
      coverImage: "GreenSkyATreeInTheClouds(Book1)",
      series: 7,
      world: 4,
      amazonLink: "https://www.amazon.com/dp/B09HYTWNMH",
      publishDate: "10/8/2021",
      synopsis: "A life of freedom and adventure! That\'s all Floin of the Squirrel Tribe has ever wanted. Traveling across the magical land of Flores in his flying treehouse, he has spent his days in quiet and peace. His solitude is broken, however, when he ends up rescuing Ruvia, a young lady of the Squirrel Tribe, from mysterious Rat Tribe assassins. Caught up in events he doesn\'t understand, Floin must decide if he will abandon an innocent person to a dark fate and resume his ordinary life, or help her by returning to a life he thought he\'d left behind.",
      onSale: false,
      audioBook: false
  };
  try {
    const updatedBook = await client.sql`
      INSERT INTO books (id, title, cover_artist, cover_image, series, world, amazon_link, publish_date, synopsis, on_sale, audio_book)
      VALUES (${newBook.id}, ${newBook.title}, ${newBook.coverArtist}, ${newBook.coverImage}, ${newBook.series}, ${newBook.world}, ${newBook.amazonLink}, ${newBook.publishDate}, ${newBook.synopsis}, ${newBook.onSale}, ${newBook.audioBook})
      ON CONFLICT (id) DO UPDATE SET title=${newBook.title}, cover_artist=${newBook.coverArtist}, cover_image=${newBook.coverImage}, series=${newBook.series}, world=${newBook.world}, amazon_link=${newBook.amazonLink}, publish_date=${newBook.publishDate}, synopsis=${newBook.synopsis}, on_sale=${newBook.onSale}, audio_book=${newBook.audioBook}
    `;
    return {
      books: updatedBook
    }
  } catch ( e ) {
      console.error( e );
      throw e;
  }
}

async function main() {
  const client = await db.connect();

  await seedBooks(client);
  await seedSeries(client);
  await seedWorlds(client);
  // await updateBookData(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
