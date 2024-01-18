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

// async function updateBookData( client ) {
//   try {
//     const updatedBooks = await Promise.all(
//       books?.map( ( book ) => client.sql`
//           INSERT INTO books (id, title, cover_artist, cover_image, series, world, amazon_link, publish_date, synopsis, on_sale, audio_book)
//           VALUES (${book.id}, ${book.title}, ${book.coverArtist}, ${book.coverImage}, ${book.series}, ${book.world}, ${book.amazonLink}, ${book.publishDate}, ${book.synopsis}, ${book.onSale}, ${book.audioBook})
//           ON CONFLICT (id) DO UPDATE SET title=${book.title}, cover_artist=${book.coverArtist}, cover_image=${book.coverImage}, series=${book.series}, world=${book.world}, amazon_link=${book.amazonLink}, publish_date=${book.publishDate}, synopsis=${book.synopsis}, on_sale=${book.onSale}, audio_book=${book.audioBook}
//       `)
//     );
//     console.log( 'updating books' );
//     return {
//       books: updatedBooks
//     }
//   } catch ( e ) {
//       console.error( e );
//       throw e;
//   }
// }

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
