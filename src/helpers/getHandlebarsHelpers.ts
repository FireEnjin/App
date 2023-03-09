import { format, parseISO } from "date-fns";
import * as jsonLogic from "json-logic-js";

export default function getHandlebarsHelpers() {
  return {
    logic: (context: any, rules: any, tempData: any) =>
      jsonLogic.apply(JSON.parse(rules.replace('"@tempData"', tempData)), {
        ...context,
        tempData,
      }),
    formatUSD: (amount: any) => {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      });

      return formatter.format(amount ? amount : 0);
    },
    date: (str: any, datePattern = "P", options = {}) => {
      try {
        const dateObj =
          typeof str === "object" && str?.constructor?.name === "Timestamp"
            ? str.toDate()
            : str || new Date();
        return format(
          typeof dateObj === "string" ? parseISO(dateObj) : dateObj,
          typeof datePattern === "string" ? datePattern : "P",
          options
        );
      } catch (error) {
        return str;
      }
    },
    toFixed: (str: any, placesAfterDecimal = "2") => {
      return parseFloat(str || "0").toFixed(
        parseInt(
          (placesAfterDecimal &&
            typeof placesAfterDecimal !== "object" &&
            placesAfterDecimal) ||
            "2"
        )
      );
    },
  };
}
