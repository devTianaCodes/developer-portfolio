import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { resolveLiveAppUrl } from "./liveAppUrl";

const fallback = "https://demo.example.com";

describe("public live app URLs", () => {
  it("uses the fallback only for an unset override", () => {
    assert.equal(resolveLiveAppUrl(undefined, fallback), fallback);
    assert.equal(resolveLiveAppUrl("", fallback), "");
    assert.equal(resolveLiveAppUrl("   ", fallback), "");
  });

  it("preserves a valid override's path, query, and anchor", () => {
    const url = "https://demo.example.com/app?mode=demo#start";
    assert.equal(resolveLiveAppUrl(` ${url} `, fallback), url);
  });

  it("rejects executable, insecure, relative, malformed, and credential-bearing URLs", () => {
    for (const value of [
      "javascript:alert(1)", "data:text/html,test", "http://demo.example.com",
      "//demo.example.com", "/app", "https://", "https://user:secret@example.com"
    ]) {
      assert.throws(() => resolveLiveAppUrl(value, fallback), /absolute HTTPS URLs without credentials/);
    }
  });

  it("does not disclose an invalid configuration value in the error", () => {
    assert.throws(() => resolveLiveAppUrl("https://user:secret@example.com", fallback), (error) => {
      assert.ok(error instanceof Error);
      assert.equal(error.message.includes("secret"), false);
      return true;
    });
  });
});
