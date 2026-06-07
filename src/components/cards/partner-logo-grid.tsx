import Image from "next/image";
import type { PartnerOrganization } from "@/content/partners";

interface PartnerLogoGridProps {
  partners: readonly PartnerOrganization[];
  columns?: 2 | 3 | 4;
}

export function PartnerLogoGrid({ partners, columns = 4 }: PartnerLogoGridProps) {
  const gridClass =
    columns === 2
      ? "grid-cols-2"
      : columns === 3
        ? "grid-cols-2 md:grid-cols-3"
        : "grid-cols-2 md:grid-cols-4";

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {partners.map((partner) => (
        <div
          key={partner.shortName}
          className="flex h-28 items-center justify-center rounded-2xl border border-white/[0.08] bg-white p-4 md:h-32"
        >
          <div className="relative h-full w-full">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 50vw, 200px"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
