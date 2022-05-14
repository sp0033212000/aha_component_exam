// noinspection RegExpSimplifiable
export const PASSWORD_CONDITION: Array<{
  pattern: RegExp;
  description: string;
}> = [
  { description: 'Have at least one uppercase letter', pattern: /[A-Z]+/ },
  { description: 'Have at least one lowercase letter', pattern: /[a-z]+/ },
  { description: 'Have at least one number', pattern: /[0-9]+/ },
  {
    description: 'Have at least one special character (!@#$...etc)',
    pattern: /[!@#$%^&*?.]+/,
  },
  { description: 'Longer than 8 characters', pattern: /^.{8,}/ },
];

export function NOOP() {
  return null;
}
