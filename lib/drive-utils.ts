/**
 * Converts Google Drive shareable URL to direct image URL
 */
export const getDriveImageUrl = (url: string): string => {
  if (!url) return '';
  
  // Check if it's already a direct URL
  if (url.includes('drive.google.com/uc')) return url;
  
  // Extract file ID from various Google Drive URL formats
  let fileId = '';
  
  // Format 1: /d/{fileId}/
  const dMatch = url.match(/\/d\/([^\/]+)/);
  if (dMatch && dMatch[1]) {
    fileId = dMatch[1];
  }
  // Format 2: id={fileId}
  else {
    const idMatch = url.match(/id=([^&]+)/);
    if (idMatch && idMatch[1]) {
      fileId = idMatch[1];
    }
  }
  
  if (!fileId) return url; // Return original if no pattern matched
  
  // Use the "uc" endpoint to avoid thumbnail downscaling
  https://drive.google.com/file/d/1adATV7Js4Hk7c9Pb6lfDSFoFJOSpub01/preview
  return `https://drive.google.com/file/d/${fileId}/preview`;
};
