import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');
  const sectionKey = sectionIds.join('|');

  useEffect(() => {
    const ids = sectionKey.split('|').filter(Boolean);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    // Offset for when a section should become active (near top of viewport).
    const activationOffset = 300;

    const updateActiveSection = () => {
      const currentPosition = window.scrollY + activationOffset;
      let nextActive = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= currentPosition) {
          nextActive = section.id;
        } else {
          break;
        }
      }

      const nearBottomBuffer = 24;
      const scrollBottom = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const isNearBottom = scrollBottom >= pageHeight - nearBottomBuffer;

      if (isNearBottom) {
        nextActive = sections[sections.length - 1].id;
      }

      setActiveSection((current) =>
        current === nextActive ? current : nextActive
      );
    };

    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('hashchange', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, [sectionKey]);

  return activeSection;
}
