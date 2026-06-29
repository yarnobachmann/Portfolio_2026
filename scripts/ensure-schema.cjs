const { Client } = require('pg')

const retries = 10
const delayMs = 1500

const sql = `
DO $$
BEGIN
  IF to_regclass('public.homepage') IS NOT NULL THEN
    ALTER TABLE "homepage" ADD COLUMN IF NOT EXISTS "hero_show_particles" boolean;
    ALTER TABLE "homepage" ADD COLUMN IF NOT EXISTS "hero_primary_label" text;
    ALTER TABLE "homepage" ADD COLUMN IF NOT EXISTS "hero_primary_href" text;
    ALTER TABLE "homepage" ADD COLUMN IF NOT EXISTS "hero_secondary_label" text;
    ALTER TABLE "homepage" ADD COLUMN IF NOT EXISTS "hero_secondary_href" text;
    ALTER TABLE "homepage" ADD COLUMN IF NOT EXISTS "hero_side_panel_enabled" boolean;
    ALTER TABLE "homepage" ADD COLUMN IF NOT EXISTS "hero_side_panel_eyebrow" text;
    ALTER TABLE "homepage" ADD COLUMN IF NOT EXISTS "hero_side_panel_title" text;
    ALTER TABLE "homepage" ADD COLUMN IF NOT EXISTS "hero_side_panel_text" text;
    ALTER TABLE "homepage" ADD COLUMN IF NOT EXISTS "hero_bottom_left" text;
    ALTER TABLE "homepage" ADD COLUMN IF NOT EXISTS "hero_bottom_right" text;
    ALTER TABLE "homepage" ADD COLUMN IF NOT EXISTS "services_eyebrow" text;
    ALTER TABLE "homepage" ADD COLUMN IF NOT EXISTS "services_title" text;

    UPDATE "homepage"
      SET
        "hero_show_particles" = COALESCE("hero_show_particles", true),
        "hero_primary_label" = COALESCE("hero_primary_label", 'View gallery'),
        "hero_primary_href" = COALESCE("hero_primary_href", '/gallery'),
        "hero_secondary_label" = COALESCE("hero_secondary_label", 'Get in touch'),
        "hero_secondary_href" = COALESCE("hero_secondary_href", '/contact'),
        "hero_side_panel_enabled" = COALESCE("hero_side_panel_enabled", true),
        "hero_side_panel_eyebrow" = COALESCE("hero_side_panel_eyebrow", 'Available now'),
        "hero_side_panel_title" = COALESCE("hero_side_panel_title", 'NL'),
        "hero_side_panel_text" = COALESCE("hero_side_panel_text", 'Based in the Netherlands'),
        "hero_bottom_left" = COALESCE("hero_bottom_left", 'Photographer & Developer'),
        "hero_bottom_right" = COALESCE("hero_bottom_right", 'Scroll to explore'),
        "services_eyebrow" = COALESCE("services_eyebrow", 'What I do'),
        "services_title" = COALESCE("services_title", 'This is what I do');
  END IF;

  IF to_regclass('public.homepage_services') IS NOT NULL THEN
    ALTER TABLE "homepage_services" ADD COLUMN IF NOT EXISTS "link_url" text;
    ALTER TABLE "homepage_services" ADD COLUMN IF NOT EXISTS "link_label" text;
    ALTER TABLE "homepage_services" ADD COLUMN IF NOT EXISTS "open_in_new_tab" boolean;

    UPDATE "homepage_services"
      SET
        "link_label" = COALESCE("link_label", 'View more'),
        "open_in_new_tab" = COALESCE("open_in_new_tab", false);
  END IF;

  IF to_regclass('public.gallery_settings') IS NOT NULL THEN
    ALTER TABLE "gallery_settings" ADD COLUMN IF NOT EXISTS "hero_eyebrow" text;
    ALTER TABLE "gallery_settings" ADD COLUMN IF NOT EXISTS "hero_title" text;
    ALTER TABLE "gallery_settings" ADD COLUMN IF NOT EXISTS "hero_subtitle" text;
    ALTER TABLE "gallery_settings" ADD COLUMN IF NOT EXISTS "stat_label" text;

    UPDATE "gallery_settings"
      SET
        "hero_eyebrow" = COALESCE("hero_eyebrow", 'Photography'),
        "hero_title" = COALESCE("hero_title", 'Gallery'),
        "hero_subtitle" = COALESCE("hero_subtitle", 'Landscapes, portraits and moments from the Netherlands and beyond.'),
        "stat_label" = COALESCE("stat_label", 'Total photos');
  END IF;

  IF to_regclass('public.projects_settings') IS NOT NULL THEN
    ALTER TABLE "projects_settings" ADD COLUMN IF NOT EXISTS "hero_eyebrow" text;
    ALTER TABLE "projects_settings" ADD COLUMN IF NOT EXISTS "hero_title" text;
    ALTER TABLE "projects_settings" ADD COLUMN IF NOT EXISTS "hero_subtitle" text;
    ALTER TABLE "projects_settings" ADD COLUMN IF NOT EXISTS "stat_label" text;
    ALTER TABLE "projects_settings" ADD COLUMN IF NOT EXISTS "cta_eyebrow" text;
    ALTER TABLE "projects_settings" ADD COLUMN IF NOT EXISTS "cta_title" text;
    ALTER TABLE "projects_settings" ADD COLUMN IF NOT EXISTS "cta_button_label" text;

    UPDATE "projects_settings"
      SET
        "hero_eyebrow" = COALESCE("hero_eyebrow", 'My work'),
        "hero_title" = COALESCE("hero_title", 'Projects'),
        "hero_subtitle" = COALESCE("hero_subtitle", 'Development work, photography projects and design explorations.'),
        "stat_label" = COALESCE("stat_label", 'Total projects'),
        "cta_eyebrow" = COALESCE("cta_eyebrow", 'Collaborate'),
        "cta_title" = COALESCE("cta_title", 'Want to work together?'),
        "cta_button_label" = COALESCE("cta_button_label", 'Get in touch');
  END IF;
END $$;
`

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function run() {
  if (!process.env.DATABASE_URL) {
    console.log('Skipping schema bootstrap: DATABASE_URL is not set.')
    return
  }

  let lastError

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    const client = new Client({ connectionString: process.env.DATABASE_URL })

    try {
      await client.connect()
      await client.query(sql)
      console.log('Schema bootstrap complete.')
      return
    } catch (err) {
      lastError = err
      console.warn(`Schema bootstrap attempt ${attempt}/${retries} failed: ${err.message}`)
      await wait(delayMs)
    } finally {
      await client.end().catch(() => undefined)
    }
  }

  throw lastError
}

run().catch((err) => {
  console.error('Schema bootstrap failed:', err)
  process.exit(1)
})
