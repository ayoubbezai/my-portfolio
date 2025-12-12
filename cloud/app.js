import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

// Get user input folder: node app dentdz
const inputFolder = process.argv[2];

if (!inputFolder) {
  console.error("❌ Please provide a folder name. Example:\n   node app dentdz");
  process.exit(1);
}

// Cloudinary configurable
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

async function listImages(folder) {
  try {
    const results = await cloudinary.v2.search
      .expression(`folder="portfolio/${folder}"`)
      .max_results(500)
      .execute();

    const urls = results.resources.map(r => r.secure_url);

    console.log(`Found ${urls.length} images in folder: portfolio/${folder}\n`);
    console.log(urls);
  } catch (error) {
    console.error("Error:", error);
  }
}

listImages(inputFolder);
