const COMMANDS = {
  textbf: "strong",
  textit: "em",
  underline: "span",
  emph: "em",
  textsuperscript: "sup",
  texttt: "code"
};

const wrapTag = (tag, content, extraClass) => {
  if (tag === "span") {
    return `<span class=\"underline\">${content}</span>`;
  }
  if (extraClass) {
    return `<${tag} class=\"${extraClass}\">${content}</${tag}>`;
  }
  return `<${tag}>${content}</${tag}>`;
};

const parseGroup = (input, startIndex) => {
  if (input[startIndex] !== "{") {
    return { content: "", nextIndex: startIndex };
  }
  let depth = 1;
  let i = startIndex + 1;
  let content = "";
  while (i < input.length && depth > 0) {
    const ch = input[i];
    if (ch === "{") depth += 1;
    if (ch === "}") depth -= 1;
    if (depth > 0) content += ch;
    i += 1;
  }
  return { content, nextIndex: i };
};

const parseSegment = (input) => {
  let output = "";
  let i = 0;
  while (i < input.length) {
    const ch = input[i];

    if (ch === "\\") {
      const rest = input.slice(i + 1);
      const commandMatch = rest.match(/^([A-Za-z]+)\{/);
      if (commandMatch) {
        const command = commandMatch[1];
        const tag = COMMANDS[command];
        if (tag) {
          const groupStart = i + 1 + command.length;
          const { content, nextIndex } = parseGroup(input, groupStart);
          const inner = parseSegment(content);
          output += wrapTag(tag, inner);
          i = nextIndex;
          continue;
        }
      }

      if (rest.startsWith("&")) {
        output += "&";
        i += 2;
        continue;
      }

      if (rest.startsWith("$")) {
        output += "$";
        i += 2;
        continue;
      }
    }

    if (ch === "{") {
      const { content, nextIndex } = parseGroup(input, i);
      output += parseSegment(content);
      i = nextIndex;
      continue;
    }

    if (ch === "}") {
      i += 1;
      continue;
    }

    output += ch;
    i += 1;
  }

  return output;
};

export const parseLatexToHtml = (value) => {
  if (!value) return "";
  const cleaned = value.replace(/\s+/g, " ");
  const parsed = parseSegment(cleaned);
  return parsed.replace(/\s+/g, " ").trim();
};

export const normalizeText = (value) => {
  if (!value) return "";
  return value.replace(/\s+/g, " ").trim();
};
