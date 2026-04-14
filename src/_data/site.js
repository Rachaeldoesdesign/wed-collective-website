function normalizeUrl(value) {
  return String(value || "").trim().replace(/\/+$/, "");
}

function normalizeAssetPath(value) {
  const normalized = normalizeUrl(value);

  if (!normalized || normalized === "/") {
    return "";
  }

  return normalized.startsWith("/") ? normalized : `/${normalized}`;
}

module.exports = function() {
  const absoluteUrl = normalizeUrl(
    process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL
  );

  return {
    name: "The Wed Collective",
    url: "",
    absoluteUrl,
    assetPath: normalizeAssetPath(process.env.ASSET_PATH),
    authorName: "Andy Clarke",
    authorEmail: "andy.clarke@stuffandnonsense.co.uk",
    telephone: "+44 (0)7515 395903",
    email: "hello@thewedcollective.co.uk",
    siteID: "wed-collective",
    copyrightOwner: "The Wed Collective",
    buttonText: "Get started"
  };
};
