-- PostgreSQL data backup (generated from SQLite)
-- Run AFTER your app has started once (so Payload creates the schema)

SET session_replication_role = replica;

-- _gallery_v (1 rows)
INSERT INTO "_gallery_v" ("id", "parent_id", "version_title", "version_filter", "version_image_id", "version_featured", "version_order", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "latest") VALUES (1, 1, 'test', 'Portrait', 1, 1, 0, '2026-05-05T11:22:40.131Z', '2026-05-05T11:22:40.131Z', 'published', '2026-05-05T11:22:40.136Z', '2026-05-05T11:22:40.136Z', 1) ON CONFLICT DO NOTHING;

-- _projects_v (7 rows)
INSERT INTO "_projects_v" ("id", "parent_id", "version_title", "version_slug", "version_tag", "version_year", "version_desc", "version_accent", "version_featured", "version_image_id", "version_url", "version_github", "version_content", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "latest") VALUES (1, 1, 'Personal Portfolio', 'personal-portfolio', 'Development', '2026', 'This very website — a multi-page portfolio built with Next.js and GSAP, featuring photography gallery, project showcase and contact form.', 1, 1, NULL, NULL, NULL, NULL, '2026-05-03T11:44:24.328Z', '2026-05-03T11:44:24.328Z', 'published', '2026-05-03T11:44:24.338Z', '2026-05-03T11:44:24.338Z', 0) ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v" ("id", "parent_id", "version_title", "version_slug", "version_tag", "version_year", "version_desc", "version_accent", "version_featured", "version_image_id", "version_url", "version_github", "version_content", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "latest") VALUES (2, 2, 'Photo Gallery App', 'photo-gallery-app', 'Development', '2025', 'A full-stack photo management web application. Supports upload, categorisation, filtering and fullscreen viewing.', 0, 0, NULL, NULL, NULL, NULL, '2026-05-03T11:44:24.351Z', '2026-05-03T11:44:24.351Z', 'published', '2026-05-03T11:44:24.359Z', '2026-05-03T11:44:24.359Z', 1) ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v" ("id", "parent_id", "version_title", "version_slug", "version_tag", "version_year", "version_desc", "version_accent", "version_featured", "version_image_id", "version_url", "version_github", "version_content", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "latest") VALUES (3, 3, 'Urban Photography Series', 'urban-photography-series', 'Photography', '2025', 'A 24-image documentary series on urban life in Dutch cities. Exhibited at the HBO student showcase.', 1, 1, NULL, NULL, NULL, NULL, '2026-05-03T11:44:24.370Z', '2026-05-03T11:44:24.370Z', 'published', '2026-05-03T11:44:24.378Z', '2026-05-03T11:44:24.378Z', 1) ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v" ("id", "parent_id", "version_title", "version_slug", "version_tag", "version_year", "version_desc", "version_accent", "version_featured", "version_image_id", "version_url", "version_github", "version_content", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "latest") VALUES (4, 4, 'CLI Task Manager', 'cli-task-manager', 'Development', '2025', 'A minimal command-line tool for managing tasks and projects. Built for personal use and shared open source.', 0, 0, NULL, NULL, NULL, NULL, '2026-05-03T11:44:24.388Z', '2026-05-03T11:44:24.388Z', 'published', '2026-05-03T11:44:24.396Z', '2026-05-03T11:44:24.396Z', 1) ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v" ("id", "parent_id", "version_title", "version_slug", "version_tag", "version_year", "version_desc", "version_accent", "version_featured", "version_image_id", "version_url", "version_github", "version_content", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "latest") VALUES (5, 5, 'Design System', 'design-system', 'Design', '2024', 'A warm, editorial dark-surface design system with a comprehensive token set, component library, and usage guidelines.', 0, 0, NULL, NULL, NULL, NULL, '2026-05-03T11:44:24.406Z', '2026-05-03T11:44:24.406Z', 'published', '2026-05-03T11:44:24.413Z', '2026-05-03T11:44:24.413Z', 1) ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v" ("id", "parent_id", "version_title", "version_slug", "version_tag", "version_year", "version_desc", "version_accent", "version_featured", "version_image_id", "version_url", "version_github", "version_content", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "latest") VALUES (6, 6, 'Landscape Portfolio', 'landscape-portfolio', 'Photography', '2024', 'A curated selection of landscape photography from the Netherlands, Belgium and Germany over two years.', 0, 0, NULL, NULL, NULL, NULL, '2026-05-03T11:44:24.423Z', '2026-05-03T11:44:24.423Z', 'published', '2026-05-03T11:44:24.431Z', '2026-05-03T11:44:24.431Z', 1) ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v" ("id", "parent_id", "version_title", "version_slug", "version_tag", "version_year", "version_desc", "version_accent", "version_featured", "version_image_id", "version_url", "version_github", "version_content", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "latest") VALUES (7, 1, 'Personal Portfolio!', 'personal-portfolio', 'Development', '2026', 'This very website — a multi-page portfolio built with Next.js and GSAP, featuring photography gallery, project showcase and contact form.', 1, 1, NULL, NULL, NULL, NULL, '2026-05-05T10:18:33.731Z', '2026-05-03T11:44:24.328Z', 'published', '2026-05-05T10:18:33.746Z', '2026-05-05T10:18:33.746Z', 1) ON CONFLICT DO NOTHING;

-- _projects_v_version_tech (24 rows)
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (1, 1, 1, 'Next.js', '69f735188f968e28ec8255d7') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (2, 1, 2, 'TypeScript', '69f735188f968e28ec8255d8') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (3, 1, 3, 'GSAP', '69f735188f968e28ec8255d9') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (4, 1, 4, 'Payload CMS', '69f735188f968e28ec8255da') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (1, 2, 5, 'Next.js', '69f735188f968e28ec8255db') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (2, 2, 6, 'Prisma', '69f735188f968e28ec8255dc') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (3, 2, 7, 'PostgreSQL', '69f735188f968e28ec8255dd') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (4, 2, 8, 'Cloudinary', '69f735188f968e28ec8255de') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (1, 3, 9, 'Canon EOS', '69f735188f968e28ec8255df') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (2, 3, 10, 'Lightroom', '69f735188f968e28ec8255e0') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (3, 3, 11, 'Film Emulation', '69f735188f968e28ec8255e1') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (1, 4, 12, 'Node.js', '69f735188f968e28ec8255e2') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (2, 4, 13, 'TypeScript', '69f735188f968e28ec8255e3') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (3, 4, 14, 'SQLite', '69f735188f968e28ec8255e4') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (1, 5, 15, 'Figma', '69f735188f968e28ec8255e5') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (2, 5, 16, 'CSS Custom Properties', '69f735188f968e28ec8255e6') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (3, 5, 17, 'Storybook', '69f735188f968e28ec8255e7') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (1, 6, 18, 'Sony A7C', '69f735188f968e28ec8255e8') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (2, 6, 19, 'Capture One', '69f735188f968e28ec8255e9') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (3, 6, 20, 'Fine Art Print', '69f735188f968e28ec8255ea') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (1, 7, 21, 'Next.js', '69f735188f968e28ec8255d7') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (2, 7, 22, 'TypeScript', '69f735188f968e28ec8255d8') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (3, 7, 23, 'GSAP', '69f735188f968e28ec8255d9') ON CONFLICT DO NOTHING;
INSERT INTO "_projects_v_version_tech" ("_order", "_parent_id", "id", "label", "_uuid") VALUES (4, 7, 24, 'Payload CMS', '69f735188f968e28ec8255da') ON CONFLICT DO NOTHING;

-- gallery (1 rows)
INSERT INTO "gallery" ("id", "title", "filter", "image_id", "featured", "order", "updated_at", "created_at", "_status") VALUES (1, 'test', 'Portrait', 1, 1, 0, '2026-05-05T11:22:40.131Z', '2026-05-05T11:22:40.131Z', 'published') ON CONFLICT DO NOTHING;

-- gallery_settings (1 rows)
INSERT INTO "gallery_settings" ("id", "hero_image_id", "updated_at", "created_at") VALUES (1, 2, '2026-05-06T09:45:23.192Z', '2026-05-06T09:45:23.192Z') ON CONFLICT DO NOTHING;

-- homepage (1 rows)
INSERT INTO "homepage" ("id", "hero_image_id", "hero_eyebrow", "hero_line1", "hero_line2", "hero_subtitle", "hero_body", "about_title", "about_body", "updated_at", "created_at") VALUES (1, NULL, 'Available for work · HBO Student', 'photographer', '& developer.', 'Photographer & Developer', 'Based in the Netherlands, creating visual work and building digital products.', 'About me', 'I''m a photographer and web developer based in the Netherlands, studying at HBO. I create visual work and build digital products.', '2026-05-05T16:39:28.423Z', '2026-05-03T11:44:24.311Z') ON CONFLICT DO NOTHING;

-- homepage_services (4 rows)
INSERT INTO "homepage_services" ("_order", "_parent_id", "id", "title", "description") VALUES (1, 1, '69f9d278cef036c00cc2f480', 'Photography', 'Landscape, portrait and documentary photography. Every frame considered, every light moment captured.') ON CONFLICT DO NOTHING;
INSERT INTO "homepage_services" ("_order", "_parent_id", "id", "title", "description") VALUES (2, 1, '69f9d278cef036c00cc2f481', 'Web Development', 'Full-stack web applications built with modern tools. Clean code, thoughtful architecture, excellent UX.') ON CONFLICT DO NOTHING;
INSERT INTO "homepage_services" ("_order", "_parent_id", "id", "title", "description") VALUES (3, 1, '69f9d278cef036c00cc2f482', 'Portrait Sessions', 'Professional portrait photography for individuals and brands. Natural light and studio environments.') ON CONFLICT DO NOTHING;
INSERT INTO "homepage_services" ("_order", "_parent_id", "id", "title", "description") VALUES (4, 1, '69f9d278cef036c00cc2f483', 'UI & Design', 'Interfaces crafted with care — dark-surface, editorial and calm. From concept to pixel-perfect delivery.') ON CONFLICT DO NOTHING;

-- homepage_stats (4 rows)
INSERT INTO "homepage_stats" ("_order", "_parent_id", "id", "value", "suffix", "label") VALUES (1, 1, '69f9d278cef036c00cc2f484', 3, '+', 'Years shooting') ON CONFLICT DO NOTHING;
INSERT INTO "homepage_stats" ("_order", "_parent_id", "id", "value", "suffix", "label") VALUES (2, 1, '69f9d278cef036c00cc2f485', 200, '+', 'Photos taken') ON CONFLICT DO NOTHING;
INSERT INTO "homepage_stats" ("_order", "_parent_id", "id", "value", "suffix", "label") VALUES (3, 1, '69f9d278cef036c00cc2f486', 12, '', 'Projects built') ON CONFLICT DO NOTHING;
INSERT INTO "homepage_stats" ("_order", "_parent_id", "id", "value", "suffix", "label") VALUES (4, 1, '69f9d278cef036c00cc2f487', 4, '', 'Photo series') ON CONFLICT DO NOTHING;

-- media (2 rows)
INSERT INTO "media" ("id", "alt", "caption", "updated_at", "created_at", "url", "thumbnail_u_r_l", "filename", "mime_type", "filesize", "width", "height", "focal_x", "focal_y", "sizes_thumbnail_url", "sizes_thumbnail_width", "sizes_thumbnail_height", "sizes_thumbnail_mime_type", "sizes_thumbnail_filesize", "sizes_thumbnail_filename", "sizes_card_url", "sizes_card_width", "sizes_card_height", "sizes_card_mime_type", "sizes_card_filesize", "sizes_card_filename", "sizes_large_url", "sizes_large_width", "sizes_large_height", "sizes_large_mime_type", "sizes_large_filesize", "sizes_large_filename") VALUES (1, 'muppet', NULL, '2026-05-05T11:22:33.593Z', '2026-05-05T11:22:33.593Z', '/api/media/file/file_0000000008ec71f4977f82720342d77d.png', NULL, 'file_0000000008ec71f4977f82720342d77d.png', 'image/png', 2282399, 1122, 1402, 50, 50, '/api/media/file/file_0000000008ec71f4977f82720342d77d-400x300.png', 400, 300, 'image/png', 319733, 'file_0000000008ec71f4977f82720342d77d-400x300.png', '/api/media/file/file_0000000008ec71f4977f82720342d77d-768x576.png', 768, 576, 'image/png', 1160568, 'file_0000000008ec71f4977f82720342d77d-768x576.png', NULL, NULL, NULL, NULL, NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO "media" ("id", "alt", "caption", "updated_at", "created_at", "url", "thumbnail_u_r_l", "filename", "mime_type", "filesize", "width", "height", "focal_x", "focal_y", "sizes_thumbnail_url", "sizes_thumbnail_width", "sizes_thumbnail_height", "sizes_thumbnail_mime_type", "sizes_thumbnail_filesize", "sizes_thumbnail_filename", "sizes_card_url", "sizes_card_width", "sizes_card_height", "sizes_card_mime_type", "sizes_card_filesize", "sizes_card_filename", "sizes_large_url", "sizes_large_width", "sizes_large_height", "sizes_large_mime_type", "sizes_large_filesize", "sizes_large_filename") VALUES (2, 'Hero', NULL, '2026-05-06T09:45:03.363Z', '2026-05-06T09:45:03.363Z', '/api/media/file/ChatGPT%20Image%206%20mei%202026%2C%2011_44_49.png', NULL, 'ChatGPT Image 6 mei 2026, 11_44_49.png', 'image/png', 2047995, 1916, 821, 50, 50, '/api/media/file/ChatGPT%20Image%206%20mei%202026%2C%2011_44_49-400x300.png', 400, 300, 'image/png', 244098, 'ChatGPT Image 6 mei 2026, 11_44_49-400x300.png', '/api/media/file/ChatGPT%20Image%206%20mei%202026%2C%2011_44_49-768x576.png', 768, 576, 'image/png', 874476, 'ChatGPT Image 6 mei 2026, 11_44_49-768x576.png', NULL, NULL, NULL, NULL, NULL, NULL) ON CONFLICT DO NOTHING;

-- navigation (1 rows)
INSERT INTO "navigation" ("id", "updated_at", "created_at") VALUES (1, '2026-05-03T11:44:24.299Z', '2026-05-03T11:44:24.299Z') ON CONFLICT DO NOTHING;

-- navigation_items (4 rows)
INSERT INTO "navigation_items" ("_order", "_parent_id", "id", "label", "href") VALUES (1, 1, '69f9d278cef036c00cc2f47c', 'Home', '/') ON CONFLICT DO NOTHING;
INSERT INTO "navigation_items" ("_order", "_parent_id", "id", "label", "href") VALUES (2, 1, '69f9d278cef036c00cc2f47d', 'Gallery', '/gallery') ON CONFLICT DO NOTHING;
INSERT INTO "navigation_items" ("_order", "_parent_id", "id", "label", "href") VALUES (3, 1, '69f9d278cef036c00cc2f47e', 'Projects', '/projects') ON CONFLICT DO NOTHING;
INSERT INTO "navigation_items" ("_order", "_parent_id", "id", "label", "href") VALUES (4, 1, '69f9d278cef036c00cc2f47f', 'Contact', '/contact') ON CONFLICT DO NOTHING;

-- payload_locked_documents (1 rows)
INSERT INTO "payload_locked_documents" ("id", "global_slug", "updated_at", "created_at") VALUES (1, 'homepage', '2026-05-05T16:44:39.456Z', '2026-05-05T16:44:39.456Z') ON CONFLICT DO NOTHING;

-- payload_locked_documents_rels (1 rows)
INSERT INTO "payload_locked_documents_rels" ("id", "order", "parent_id", "path", "users_id", "media_id", "projects_id", "gallery_id", "technologies_id", "experience_id") VALUES (1, NULL, 1, 'user', 1, NULL, NULL, NULL, NULL, NULL) ON CONFLICT DO NOTHING;

-- payload_migrations (1 rows)
INSERT INTO "payload_migrations" ("id", "name", "batch", "updated_at", "created_at") VALUES (1, 'dev', -1, '2026-05-06 19:05:12', '2026-05-03T10:55:20.309Z') ON CONFLICT DO NOTHING;

-- payload_preferences (11 rows)
INSERT INTO "payload_preferences" ("id", "key", "value", "updated_at", "created_at") VALUES (1, 'collection-projects', '{"limit":10,"editViewType":"live-preview"}', '2026-05-05T10:27:38.870Z', '2026-05-05T09:58:49.942Z') ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences" ("id", "key", "value", "updated_at", "created_at") VALUES (2, 'collection-gallery', '{"editViewType":"default"}', '2026-05-05T11:22:17.051Z', '2026-05-05T09:58:51.783Z') ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences" ("id", "key", "value", "updated_at", "created_at") VALUES (3, 'global-site-settings', '{"editViewType":"default"}', '2026-05-05T10:08:52.848Z', '2026-05-05T10:08:52.848Z') ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences" ("id", "key", "value", "updated_at", "created_at") VALUES (4, 'nav', '{"open":true}', '2026-05-05T10:27:33.998Z', '2026-05-05T10:17:50.199Z') ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences" ("id", "key", "value", "updated_at", "created_at") VALUES (5, 'global-homepage', '{"editViewType":"live-preview"}', '2026-05-05T10:28:29.766Z', '2026-05-05T10:28:19.146Z') ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences" ("id", "key", "value", "updated_at", "created_at") VALUES (6, 'global-navigation', '{"editViewType":"default"}', '2026-05-05T11:08:57.901Z', '2026-05-05T11:08:57.902Z') ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences" ("id", "key", "value", "updated_at", "created_at") VALUES (7, 'collection-experience', '{}', '2026-05-05T11:09:00.673Z', '2026-05-05T11:09:00.673Z') ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences" ("id", "key", "value", "updated_at", "created_at") VALUES (8, 'collection-technologies', '{}', '2026-05-05T11:09:03.304Z', '2026-05-05T11:09:03.304Z') ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences" ("id", "key", "value", "updated_at", "created_at") VALUES (9, 'collection-media', '{"editViewType":"default"}', '2026-05-05T11:22:24.303Z', '2026-05-05T11:09:09.494Z') ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences" ("id", "key", "value", "updated_at", "created_at") VALUES (10, 'collection-users', '{}', '2026-05-05T11:09:11.820Z', '2026-05-05T11:09:11.820Z') ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences" ("id", "key", "value", "updated_at", "created_at") VALUES (11, 'global-gallery-settings', '{"editViewType":"default"}', '2026-05-06T09:44:28.180Z', '2026-05-06T09:44:28.181Z') ON CONFLICT DO NOTHING;

-- payload_preferences_rels (11 rows)
INSERT INTO "payload_preferences_rels" ("id", "order", "parent_id", "path", "users_id") VALUES (4, NULL, 3, 'user', 1) ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences_rels" ("id", "order", "parent_id", "path", "users_id") VALUES (7, NULL, 4, 'user', 1) ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences_rels" ("id", "order", "parent_id", "path", "users_id") VALUES (8, NULL, 1, 'user', 1) ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences_rels" ("id", "order", "parent_id", "path", "users_id") VALUES (9, NULL, 5, 'user', 1) ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences_rels" ("id", "order", "parent_id", "path", "users_id") VALUES (10, NULL, 6, 'user', 1) ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences_rels" ("id", "order", "parent_id", "path", "users_id") VALUES (11, NULL, 7, 'user', 1) ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences_rels" ("id", "order", "parent_id", "path", "users_id") VALUES (12, NULL, 8, 'user', 1) ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences_rels" ("id", "order", "parent_id", "path", "users_id") VALUES (14, NULL, 10, 'user', 1) ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences_rels" ("id", "order", "parent_id", "path", "users_id") VALUES (15, NULL, 2, 'user', 1) ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences_rels" ("id", "order", "parent_id", "path", "users_id") VALUES (16, NULL, 9, 'user', 1) ON CONFLICT DO NOTHING;
INSERT INTO "payload_preferences_rels" ("id", "order", "parent_id", "path", "users_id") VALUES (17, NULL, 11, 'user', 1) ON CONFLICT DO NOTHING;

-- projects (6 rows)
INSERT INTO "projects" ("id", "title", "slug", "tag", "year", "desc", "accent", "featured", "image_id", "url", "github", "content", "updated_at", "created_at", "_status") VALUES (1, 'Personal Portfolio!', 'personal-portfolio', 'Development', '2026', 'This very website — a multi-page portfolio built with Next.js and GSAP, featuring photography gallery, project showcase and contact form.', 1, 1, NULL, NULL, NULL, NULL, '2026-05-05T10:18:33.731Z', '2026-05-03T11:44:24.328Z', 'published') ON CONFLICT DO NOTHING;
INSERT INTO "projects" ("id", "title", "slug", "tag", "year", "desc", "accent", "featured", "image_id", "url", "github", "content", "updated_at", "created_at", "_status") VALUES (2, 'Photo Gallery App', 'photo-gallery-app', 'Development', '2025', 'A full-stack photo management web application. Supports upload, categorisation, filtering and fullscreen viewing.', 0, 0, NULL, NULL, NULL, NULL, '2026-05-03T11:44:24.351Z', '2026-05-03T11:44:24.351Z', 'published') ON CONFLICT DO NOTHING;
INSERT INTO "projects" ("id", "title", "slug", "tag", "year", "desc", "accent", "featured", "image_id", "url", "github", "content", "updated_at", "created_at", "_status") VALUES (3, 'Urban Photography Series', 'urban-photography-series', 'Photography', '2025', 'A 24-image documentary series on urban life in Dutch cities. Exhibited at the HBO student showcase.', 1, 1, NULL, NULL, NULL, NULL, '2026-05-03T11:44:24.370Z', '2026-05-03T11:44:24.370Z', 'published') ON CONFLICT DO NOTHING;
INSERT INTO "projects" ("id", "title", "slug", "tag", "year", "desc", "accent", "featured", "image_id", "url", "github", "content", "updated_at", "created_at", "_status") VALUES (4, 'CLI Task Manager', 'cli-task-manager', 'Development', '2025', 'A minimal command-line tool for managing tasks and projects. Built for personal use and shared open source.', 0, 0, NULL, NULL, NULL, NULL, '2026-05-03T11:44:24.388Z', '2026-05-03T11:44:24.388Z', 'published') ON CONFLICT DO NOTHING;
INSERT INTO "projects" ("id", "title", "slug", "tag", "year", "desc", "accent", "featured", "image_id", "url", "github", "content", "updated_at", "created_at", "_status") VALUES (5, 'Design System', 'design-system', 'Design', '2024', 'A warm, editorial dark-surface design system with a comprehensive token set, component library, and usage guidelines.', 0, 0, NULL, NULL, NULL, NULL, '2026-05-03T11:44:24.406Z', '2026-05-03T11:44:24.406Z', 'published') ON CONFLICT DO NOTHING;
INSERT INTO "projects" ("id", "title", "slug", "tag", "year", "desc", "accent", "featured", "image_id", "url", "github", "content", "updated_at", "created_at", "_status") VALUES (6, 'Landscape Portfolio', 'landscape-portfolio', 'Photography', '2024', 'A curated selection of landscape photography from the Netherlands, Belgium and Germany over two years.', 0, 0, NULL, NULL, NULL, NULL, '2026-05-03T11:44:24.423Z', '2026-05-03T11:44:24.423Z', 'published') ON CONFLICT DO NOTHING;

-- projects_tech (20 rows)
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (1, 2, '69f735188f968e28ec8255db', 'Next.js') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (2, 2, '69f735188f968e28ec8255dc', 'Prisma') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (3, 2, '69f735188f968e28ec8255dd', 'PostgreSQL') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (4, 2, '69f735188f968e28ec8255de', 'Cloudinary') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (1, 3, '69f735188f968e28ec8255df', 'Canon EOS') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (2, 3, '69f735188f968e28ec8255e0', 'Lightroom') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (3, 3, '69f735188f968e28ec8255e1', 'Film Emulation') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (1, 4, '69f735188f968e28ec8255e2', 'Node.js') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (2, 4, '69f735188f968e28ec8255e3', 'TypeScript') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (3, 4, '69f735188f968e28ec8255e4', 'SQLite') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (1, 5, '69f735188f968e28ec8255e5', 'Figma') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (2, 5, '69f735188f968e28ec8255e6', 'CSS Custom Properties') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (3, 5, '69f735188f968e28ec8255e7', 'Storybook') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (1, 6, '69f735188f968e28ec8255e8', 'Sony A7C') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (2, 6, '69f735188f968e28ec8255e9', 'Capture One') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (3, 6, '69f735188f968e28ec8255ea', 'Fine Art Print') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (1, 1, '69f735188f968e28ec8255d7', 'Next.js') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (2, 1, '69f735188f968e28ec8255d8', 'TypeScript') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (3, 1, '69f735188f968e28ec8255d9', 'GSAP') ON CONFLICT DO NOTHING;
INSERT INTO "projects_tech" ("_order", "_parent_id", "id", "label") VALUES (4, 1, '69f735188f968e28ec8255da', 'Payload CMS') ON CONFLICT DO NOTHING;

-- site_settings (1 rows)
INSERT INTO "site_settings" ("id", "site_name", "site_title", "site_description", "email", "location", "education", "github", "instagram", "linkedin", "copyright", "updated_at", "created_at") VALUES (1, 'Yarno Bachmann', 'Yarno Bachmann — Photographer & Developer', 'Based in the Netherlands. Photographer and developer with a passion for clean design and compelling visuals.', 'yarno@example.com', 'Netherlands, EU', 'HBO University', NULL, NULL, NULL, '© 2026 Yarno Bachmann', '2026-05-05T11:20:24.562Z', '2026-05-03T11:44:24.287Z') ON CONFLICT DO NOTHING;

-- users (1 rows)
INSERT INTO "users" ("id", "name", "updated_at", "created_at", "email", "reset_password_token", "reset_password_expiration", "salt", "hash", "login_attempts", "lock_until") VALUES (1, 'yarno', '2026-05-05T09:58:44.216Z', '2026-05-05T09:58:44.215Z', 'minejarno@gmail.com', NULL, NULL, '51a00e58693a86aa6136d6a5027470763040544c6b70ea1df4083042dcdb5d79', 'e264a66b060d85cb87e086b6e6da6a08c00c09ae463c0ab5ba472315dcca41fe042aa8fabea8a19597bbc893a55e20874edf11f8a9fc32ec199b085edf80ee9c6012381de77e491046dfe64604e9f5b34f10b764345126e186066a61caf2928aea06eb854201c91fffe9e05d433f493c0e85d37d68771371d9769e936e08d492ffc0f45fe850d80b8482c57a8737527acd7f284955417ea0214eba39ef345dbc4d6427de8106e8ce61c8ea306a54553770f99f0e0496a57cbf62e69186cf1789601ad1a578561a35364596c608de44e3e997c1f4f506fd0c0755e50649b3b47875c85df281a92a051b4829e54125aca463a06452b7432aa473094faae9c2cb37502f81f176829f9a1014352619c410f17e05f158be4bf4fa173fff9427fa7d149e0980cda43bbaa33bff06ad904eb9fb216a96ad16231685d7997a63073d08273de28d8adb3748eb2ab0439451a3ff5d1256935a2b62005447a82d8a4a348c6bfe7bed44274022bc160834e9e2d91d7a2dcfc729e38b2f83adf2251996a22b1c3bb1ed4c3f7315eaaea12a80799147694ff7af43f7cf515a3f685993c93c70df8f4cfc6fd880619af67c8b38bdbfa75cba99961a923f3598e60174d8cba0adde4ff183fc26056439ba15f2446ba37c5a933894c4fa5dbad68c70f930aec7d28fd4622c5e79686a24de95c62795b88e7cc05cc56bebafc758429b074e97c60ba9', 0, NULL) ON CONFLICT DO NOTHING;

-- users_sessions (1 rows)
INSERT INTO "users_sessions" ("_order", "_parent_id", "id", "created_at", "expires_at") VALUES (1, 1, 'f2181132-0faf-4eb0-b5e8-dcfd6a9d0a3b', '2026-05-06T09:44:12.027Z', '2026-05-06T11:44:12.027Z') ON CONFLICT DO NOTHING;

SET session_replication_role = origin;
