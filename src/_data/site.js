const editableSiteContent = require("./site-content.json");

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
    ...editableSiteContent,
    url: "",
    absoluteUrl,
    assetPath: normalizeAssetPath(process.env.ASSET_PATH)
  };
};
