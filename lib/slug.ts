/**
 * URL slug helpers.
 *
 * As rotas antigas usavam o nome do local codificado (ex.: "/cidade/s%C3%A3o%20jos%C3%A9%20dos%20pinhais").
 * Passamos a usar slugs ASCII ("/cidade/sao-jose-dos-pinhais"), mantendo compatibilidade:
 * as URLs antigas continuam abrindo e apontam canonical para a versão em slug.
 */

export const slugify = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^a-zA-Z0-9\s-]/g, '') // remove pontuação (parênteses, etc.)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

/**
 * Resolve o parâmetro recebido na URL (slug novo OU nome antigo codificado)
 * para o nome oficial existente na lista.
 */
export const resolveLocation = (param: string, list: string[]): string | undefined => {
  const decoded = (() => {
    try {
      return decodeURIComponent(param);
    } catch {
      return param;
    }
  })();
  const wanted = slugify(decoded);
  return list.find((item) => slugify(item) === wanted);
};
