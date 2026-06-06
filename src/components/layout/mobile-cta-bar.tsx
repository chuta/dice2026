"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.06] bg-surface-elevated/95 p-4 backdrop-blur-xl lg:hidden">
      <Button href="/tickets" className="w-full" showArrow>
        Register Now
      </Button>
    </div>
  );
}
