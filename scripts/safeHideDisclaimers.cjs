const fs = require('fs');

let homePage = fs.readFileSync('src/components/HomePage.astro', 'utf-8');

homePage = homePage.replace(
  '<p class="hero-note" data-i18n="hero.note">A practice screener — not an official DMV test, a diagnosis or a prescription.</p>',
  ''
);

const footerDisclaimer = `    <div class="disclaimer">
      <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 21 19H3l9-15.5Z"/><path d="M12 10v4.2M12 16.6v.1"/></svg>
      <p data-i18n="footer.disclaimer">This site is an educational practice screener only. It is not an official DMV or DOT test, it is not a medical examination, and it cannot diagnose an eye condition or produce a prescription. Screen-based results are affected by your monitor, room lighting and viewing distance. If a check suggests a problem, or you have any concern about your vision, see an optometrist or ophthalmologist before your DMV appointment. Not affiliated with, endorsed by, or connected to any Department of Motor Vehicles.</p>
    </div>`;

const wrappedDisclaimer = `    <details class="disclaimer-details">
      <summary class="btn btn-quiet btn-sm" style="margin-bottom:12px; cursor:pointer;"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 21 19H3l9-15.5Z"/><path d="M12 10v4.2M12 16.6v.1"/></svg> Legal & Medical Notice (Click to expand)</summary>
      <div class="disclaimer" style="margin-top:8px;">
        <p data-i18n="footer.disclaimer">This site is an educational practice screener only. It is not an official DMV or DOT test, it is not a medical examination, and it cannot diagnose an eye condition or produce a prescription. Screen-based results are affected by your monitor, room lighting and viewing distance. If a check suggests a problem, or you have any concern about your vision, see an optometrist or ophthalmologist before your DMV appointment. Not affiliated with, endorsed by, or connected to any Department of Motor Vehicles.</p>
      </div>
    </details>`;

homePage = homePage.replace(footerDisclaimer, wrappedDisclaimer);
fs.writeFileSync('src/components/HomePage.astro', homePage);
console.log('Restored and updated HomePage.astro');
