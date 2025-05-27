// import { NextResponse } from "next/server";
// import { IncomingForm } from "formidable";
// import { Readable } from "stream";
// import { v2 as cloudinary } from "cloudinary";
// import dbConnect from "../../../../lib/mongodb";
// import Submission from "../../../../models/Submission";

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Disable Next.js default body parser
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// // Create a fake IncomingMessage stream with headers
// class FakeIncomingMessage extends Readable {
//   headers: { [key: string]: string };
//   constructor(buffer: Buffer, headers: { [key: string]: string }) {
//     super();
//     this.headers = headers;
//     this.push(buffer);
//     this.push(null);
//   }
//   _read() {} // No-op required
// }

// // Function to parse form data
// async function parseForm(request: Request) {
//   const contentType = request.headers.get("content-type") || "";
//   const contentLength = request.headers.get("content-length") || "0";

//   const buffer = Buffer.from(await request.arrayBuffer());

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   return new Promise<{ fields: any; files: any }>((resolve, reject) => {
//     const form = new IncomingForm({ multiples: true, keepExtensions: true });

//     const fakeReq = new FakeIncomingMessage(buffer, {
//       "content-type": contentType,
//       "content-length": contentLength,
//     });

//     form.parse(fakeReq as never, (err, fields, files) => {
//       if (err) return reject(err);
//       resolve({ fields, files });
//     });
//   });
// }

// // Helper function to upload files to Cloudinary
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// async function uploadToCloudinary(file: any) {
//   try {
//     const result = await cloudinary.uploader.upload(file.filepath, {
//       folder: "submissions",
//     });
//     return { url: result.secure_url, filename: result.original_filename };
//   } catch (error) {
//     console.error("Cloudinary Upload Error:", error);
//     throw new Error("File upload failed");
//   }
// }

// // POST handler
// export async function POST(request: Request) {
//   await dbConnect();

//   let fields, files;
//   try {
//     ({ fields, files } = await parseForm(request));
//     console.log("Parsed Fields:", fields);
//     console.log("Parsed Files:", files);
//   } catch (error) {
//     console.error("Error parsing form:", error);
//     return NextResponse.json(
//       { error: "Error parsing form data" },
//       { status: 500 }
//     );
//   }

//   const documents = [];
//   for (const fieldName in files) {
//     const fileData = files[fieldName];
//     if (Array.isArray(fileData)) {
//       for (const file of fileData) {
//         const { url, filename } = await uploadToCloudinary(file);
//         documents.push({ fieldName, fileUrl: url, fileName: filename });
//       }
//     } else {
//       const { url, filename } = await uploadToCloudinary(fileData);
//       documents.push({ fieldName, fileUrl: url, fileName: filename });
//     }
//   }

//   try {
//     const sectionTitle = Array.isArray(fields.sectionTitle)
//       ? fields.sectionTitle[0]
//       : fields.sectionTitle;
//     const firstName = Array.isArray(fields.firstName)
//       ? fields.firstName[0]
//       : fields.firstName;
//     const lastName = Array.isArray(fields.lastName)
//       ? fields.lastName[0]
//       : fields.lastName;
//     const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
//     const additionalInfo = Array.isArray(fields.additionalInfo)
//       ? fields.additionalInfo[0]
//       : fields.additionalInfo;

//     const newSubmission = await Submission.create({
//       sectionTitle,
//       firstName,
//       lastName,
//       email,
//       additionalInfo,
//       documents,
//     });

//     return NextResponse.json(
//       { success: true, data: newSubmission },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error saving to database:", error);
//     return NextResponse.json(
//       { error: "Error saving submission" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import { Readable } from "stream";
import { v2 as cloudinary } from "cloudinary";
import dbConnect from "../../../../lib/mongodb";
import Submission from "../../../../models/Submission";
// import { v4 as uuidv4 } from "uuid";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Disable Next.js default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Create a fake IncomingMessage stream with headers
class FakeIncomingMessage extends Readable {
  headers: { [key: string]: string };
  constructor(buffer: Buffer, headers: { [key: string]: string }) {
    super();
    this.headers = headers;
    this.push(buffer);
    this.push(null);
  }
  _read() {} // No-op required
}

// Function to parse form data
async function parseForm(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  const contentLength = request.headers.get("content-length") || "0";

  const buffer = Buffer.from(await request.arrayBuffer());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new Promise<{ fields: any; files: any }>((resolve, reject) => {
    const form = new IncomingForm({ multiples: true, keepExtensions: true });

    const fakeReq = new FakeIncomingMessage(buffer, {
      "content-type": contentType,
      "content-length": contentLength,
    });

    form.parse(fakeReq as never, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
}

// Helper function to upload files to Cloudinary
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function uploadToCloudinary(file: any) {
  try {
    const result = await cloudinary.uploader.upload(file.filepath, {
      folder: "submissions",
    });
    return { url: result.secure_url, filename: result.original_filename };
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error("File upload failed");
  }
}

// Function to generate tracking code
function generateTrackingCode(): string {
  const date = new Date();
  const datePart = date.toISOString().slice(2, 10).replace(/-/g, "");
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `TRK-${datePart}-${randomPart}`;
}

// POST handler
export async function POST(request: Request) {
  await dbConnect();

  let fields, files;
  try {
    ({ fields, files } = await parseForm(request));
    console.log("Parsed Fields:", fields);
    console.log("Parsed Files:", files);
  } catch (error) {
    console.error("Error parsing form:", error);
    return NextResponse.json(
      { error: "Error parsing form data" },
      { status: 500 }
    );
  }

  // Upload files to Cloudinary
  const documents = [];
  for (const fieldName in files) {
    const fileData = files[fieldName];
    if (Array.isArray(fileData)) {
      for (const file of fileData) {
        const { url, filename } = await uploadToCloudinary(file);
        documents.push({ fieldName, fileUrl: url, fileName: filename });
      }
    } else {
      const { url, filename } = await uploadToCloudinary(fileData);
      documents.push({ fieldName, fileUrl: url, fileName: filename });
    }
  }

  try {
    // Extract form fields
    const sectionTitle = Array.isArray(fields.sectionTitle)
      ? fields.sectionTitle[0]
      : fields.sectionTitle;
    const firstName = Array.isArray(fields.firstName)
      ? fields.firstName[0]
      : fields.firstName;
    const lastName = Array.isArray(fields.lastName)
      ? fields.lastName[0]
      : fields.lastName;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const additionalInfo = Array.isArray(fields.additionalInfo)
      ? fields.additionalInfo[0]
      : fields.additionalInfo;

    // Generate tracking code and set status
    const trackingCode = fields.trackingCode?.[0] || generateTrackingCode();
    const status = "pending"; // Default status

    // Create new submission
    const newSubmission = await Submission.create({
      sectionTitle,
      firstName,
      lastName,
      email,
      additionalInfo,
      documents,
      trackingCode,
      status,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        data: newSubmission,
        trackingCode, // Include tracking code in response
        status, // Include status in response
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving to database:", error);
    return NextResponse.json(
      { error: "Error saving submission" },
      { status: 500 }
    );
  }
}
