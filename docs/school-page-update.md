# Suggested replacement for the school website page

Current page:
https://www.woodstock.oxon.sch.uk/page/?title=Friends+of+Woodstock+CE+Primary+School&pid=125

Suggested minimal copy (paste into the school CMS page), keeping it to basic
info plus a link to the PTA's own website:

---

## Friends of Woodstock CE Primary School

Welcome to the Friends of Woodstock CE Primary School, our school's Parent
Teacher Association (PTA). We bring parents, carers, staff and the local
community together to support our school, raise funds and create memorable
experiences for our children.

**Visit our website** for upcoming events and ticketing, ways to donate,
committee details and photos, and how to get involved:

👉 [Friends of Woodstock PTA website](https://pta.claidler.uk)

To get in touch, email: friendsofwoodstockceprimarysch@gmail.com

---

Deployed 2026-11-06 on Cloudflare Pages (free tier):

- custom domain: <https://pta.claidler.uk>
- direct Pages URL: <https://woodstock-pta.pages.dev>

If the custom domain is ever dropped, swap the link above for the direct
Pages URL. Re-point it by editing the `url` field in `src/config/site.js`
as well, so the site and the school page agree.
