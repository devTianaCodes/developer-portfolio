import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

type Messages = Record<string, unknown>;

function isMessageGroup(value: unknown): value is Messages {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeMessages(base: Messages, localized: Messages): Messages {
  return Object.fromEntries(
    Object.entries(base).map(([key, value]) => {
      const localizedValue = localized[key];

      if (isMessageGroup(value) && isMessageGroup(localizedValue)) {
        return [key, mergeMessages(value, localizedValue)];
      }

      return [key, localizedValue ?? value];
    })
  );
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = hasLocale(routing.locales, requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;

  const englishMessages = (await import("./messages/en.json")).default as Messages;
  const localizedMessages = (await import(`./messages/${locale}.json`)).default as Messages;

  return {
    locale,
    messages:
      locale === routing.defaultLocale
        ? englishMessages
        : mergeMessages(englishMessages, localizedMessages)
  };
});
