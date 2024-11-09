import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  title: "FoodieFinds - Culinary Adventures & Recipes",
  description:
    "Discover world cuisines, cooking tips, and gourmet experiences.",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    title: "Text Comparison & Analysis",
    slug: "text-tools",
    tools: [
      {
        title: "Word Counter",
        desc: "Count words, characters, and sentences to meet specific text length requirements.",
        href: "https://tools360s.com/word-counter",
      },
      {
        title: "Text Comparison",
        desc: "Identify differences between two texts by comparing them side-by-side.",
        href: "https://tools360s.com/text-compare",
      },
    ],
  },
  {
    title: "SEO & Website Optimization",
    slug: "seo-tools",
    tools: [
      {
        title: "Check Google Cache",
        desc: "View Google’s cached version of your site for indexing accuracy.",
        href: "https://tools360s.com/google-cache-checker/",
      },
      {
        title: "Meta Tag Analysis",
        desc: "Optimize your site’s meta tags for better search engine rankings.",
        href: "https://tools360s.com/meta-tags-analyzer/",
      },
      {
        title: "Security Audit",
        desc: "Scan your website for vulnerabilities to protect against security threats.",
        href: "https://tools360s.com/safe-browsing",
      },
      {
        title: "Backlink Builder",
        desc: "Generate quality backlinks to boost your site’s SEO and visibility.",
        href: "https://tools360s.com/backlink-maker",
      },
      {
        title: "URL Redirection Checker",
        desc: "Ensure your URLs are correctly redirected to prevent SEO issues.",
        href: "https://tools360s.com/redirect-checker",
      },
      {
        title: "Google Index Checker",
        desc: "Verify if your URLs are indexed on Google for maximum search visibility.",
        href: "https://tools360s.com/google-index-checker/",
      },
    ],
  },
  {
    title: "Image Editing & Management",
    slug: "image-tools",
    tools: [
      {
        title: "Image Cropper",
        desc: "Crop images to the desired size or aspect ratio.",
        href: "https://review360.info/image-crop",
      },
      {
        title: "Compress Images",
        desc: "Reduce image file sizes to enhance page loading speed.",
        href: "https://review360.info",
      },
      {
        title: "Watermark Tool",
        desc: "Add watermarks to protect your images from unauthorized use.",
        href: "https://review360.info/insert-logo",
      },
      {
        title: "Resize Images",
        desc: "Adjust image dimensions to fit website or social media specifications.",
        href: "https://review360.info/image-resizer",
      },
      {
        title: "Image Format Converter",
        desc: "Convert images to various formats like JPEG, PNG, and WebP.",
        href: "https://review360.info/image-converter",
      },
      {
        title: "Cloud Upload",
        desc: "Upload images to the cloud for quick access and sharing.",
        href: "https://review360.info/upload-image",
      },
    ],
  },
  {
    title: "URL & Link Utilities",
    slug: "url-tools",
    tools: [
      {
        title: "Short URL Creator",
        desc: "Turn long URLs into short, easy-to-share links.",
        href: "https://free-url.short360s.com/",
      },
      {
        title: "QR Code Maker",
        desc: "Generate QR codes for links for quick mobile sharing.",
        href: "https://free-url.short360s.com/qr-code-generator/",
      },
      {
        title: "Link Analytics",
        desc: "Track click statistics and traffic for your shortened links.",
        href: "https://free-url.short360s.com/stats",
      },
    ],
  },
  {
    title: "General Utilities",
    slug: "general-tools",
    tools: [
      {
        title: "Invoice Creator",
        desc: "Create professional invoices with breakdowns and payment terms.",
        href: "https://tools360s.com/invoice-generator",
      },
      {
        title: "Password Generator",
        desc: "Generate secure, random passwords with diverse character sets.",
        href: "https://tools360s.com/password-generator/",
      },
      {
        title: "Browser Version Check",
        desc: "Check if your browser is up-to-date for optimal performance.",
        href: "https://tools360s.com/browser-update/",
      },
      {
        title: "Code Formatter",
        desc: "Format HTML, CSS, JavaScript, and JSON for improved readability.",
        href: "https://tools360s.com/code-formatter",
      },
      {
        title: "Public IP Finder",
        desc: "Identify your device’s public IP address in both IPv4 and IPv6 formats.",
        href: "https://tools360s.com/what-is-my-ip",
      },
    ],
  },
];
