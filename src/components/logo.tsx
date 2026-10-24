import Link from "next/link";

/** The foundation's mark: a figure rising toward a star, with an arc of light. Source: public/logo-mark.svg */
export function Mark({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="570 70 660 950" className={className} aria-hidden="true">
      <path fill="#FFD21F" d="M870 85 L889 140 L947 141 L901 176 L918 232 L870 199 L822 232 L839 176 L793 141 L851 140 Z" stroke="#FFD21F" strokeWidth="10" strokeLinejoin="round"/>
      <path fill="#1E9BEA" fillRule="evenodd" d="M660 330 Q760 300 935 300 L945 272 Q978 298 992 340 Q1016 420 1010 540 Q1005 582 968 592 Q860 604 758 656 Q884 632 962 682 Q1012 722 990 802 Q960 882 860 937 L828 952 L842 924 Q700 860 625 720 Q585 640 590 480 Q592 380 610 352 Q626 333 660 330 Z M973 425 A58 58 0 1 0 857 425 A58 58 0 1 0 973 425 Z"/>
      <path fill="#FFD21F" d="M990 312 Q1152 322 1182 482 Q1212 652 1172 862 L1160 972 L1098 972 Q1132 762 1112 602 Q1082 422 1027 372 Q1000 346 990 312 Z"/>
      <path fill="#7CCB16" d="M1062 700 Q1082 830 1062 1008 L1050 948 L1040 985 Q992 942 918 906 Q1012 822 1062 700 Z"/>
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="De_Light Foundation home">
      <Mark />
      <span className="leading-tight">
        <span className={`block font-serif text-lg font-semibold ${light ? "text-white" : "text-navy"}`}>
          De_Light
        </span>
        <span className={`block text-[10px] uppercase tracking-[0.2em] ${light ? "text-gold-light" : "text-gold"}`}>
          Foundation
        </span>
      </span>
    </Link>
  );
}
