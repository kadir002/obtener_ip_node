const IPV6_PREFIX = "::ffff:";

function cleanIp(ip) {
  if (!ip) return "";
  return ip.startsWith(IPV6_PREFIX) ? ip.slice(IPV6_PREFIX.length) : ip;
}

function parseForwardedFor(headerValue) {
  if (!headerValue) return "";
  const first = headerValue.split(",")[0]?.trim();
  return first ?? "";
}

export function getClientIp(req, trustProxy) {
  if (trustProxy) {
    const forwarded = req.headers["x-forwarded-for"];

    
    if (typeof forwarded === "string") {
      return cleanIp(parseForwardedFor(forwarded));
    }
  }

  return cleanIp(req.socket?.remoteAddress ?? "");
}