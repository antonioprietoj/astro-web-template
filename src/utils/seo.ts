import { site } from '@/data/site';

export interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function buildSeo(props: SeoProps = {}) {
  const title = props.title
    ? site.seo.titleTemplate.replace('%s', props.title)
    : site.seo.defaultTitle;

  const description = props.description ?? site.seo.defaultDescription;
  const image       = props.image       ?? site.seo.defaultImage;

  return { title, description, image };
}

export function whatsappUrl(message?: string) {
  const msg = encodeURIComponent(message ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsapp}?text=${msg}`;
}

export function tel(raw = site.phone) {
  return `tel:${raw.replace(/\s/g, '')}`;
}

export function mailto(address = site.email) {
  return `mailto:${address}`;
}
