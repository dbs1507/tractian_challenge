"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

/* ─────────────────────── SVG Icons ─────────────────────── */

function ZoomInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function ZoomOutIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ─────────────── Zoom-in hover trigger (for the thumbnail) ─────────────── */

export function ZoomableFigure({
  src,
  alt,
  onZoom,
}: {
  src: string;
  alt: string;
  onZoom: () => void;
}) {
  return (
    <figure className="w-full rounded-sm">
      <div className="relative">
        <button
          type="button"
          className="absolute inset-0 z-10 block cursor-zoom-in"
          aria-label="Zoom In"
          onClick={onZoom}
        >
        </button>
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          className="object-contain"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    </figure>
  );
}

/* ─────────────────────── Lightbox Modal ─────────────────────── */

const ZOOM_STEP = 0.25;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;

export function ImageLightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = useCallback(() => {
    setZoom((prev) => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((prev) => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoom(1);
  }, []);

  // Keyboard shortcuts: ESC close, +/- zoom
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "+":
        case "=":
          handleZoomIn();
          break;
        case "-":
          handleZoomOut();
          break;
        case "0":
          handleResetZoom();
          break;
      }
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, handleZoomIn, handleZoomOut, handleResetZoom]);

  // Scroll wheel zoom
  useEffect(() => {
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        handleZoomIn();
      } else {
        handleZoomOut();
      }
    };
    document.addEventListener("wheel", handler, { passive: false });
    return () => document.removeEventListener("wheel", handler);
  }, [handleZoomIn, handleZoomOut]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      {/* Modal card */}
      <div
        className="relative mx-4 flex h-[90vh] w-full max-w-[900px] flex-col overflow-hidden rounded-xl bg-white shadow-2xl lg:max-w-[1100px] xl:max-w-[1300px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toolbar */}
        <div className="absolute right-3 top-3 z-10 flex items-center gap-1">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            aria-label="Zoom In"
            onClick={handleZoomIn}
            disabled={zoom >= MAX_ZOOM}
          >
            <ZoomInIcon className="h-[24px] w-[24px]" />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            aria-label="Zoom Out"
            onClick={handleZoomOut}
            disabled={zoom <= MIN_ZOOM}
          >
            <ZoomOutIcon className="h-[24px] w-[24px]" />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close"
            onClick={onClose}
          >
            <CloseIcon className="h-[24px] w-[24px]" />
          </button>
        </div>

        {/* Image container */}
        <div className="flex flex-1 items-center justify-center overflow-auto px-3 pb-3 pt-10">
          <div
            className="flex h-full w-full items-center justify-center transition-transform duration-200 ease-out"
            style={{ transform: `scale(${zoom})` }}
          >
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="h-full w-full object-contain"
              sizes="(min-width: 1024px) 80vw, 95vw"
              priority
            />
          </div>
        </div>

        {/* Zoom indicator */}
        {zoom !== 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-800/70 px-3 py-1 text-xs text-white">
            {Math.round(zoom * 100)}%
          </div>
        )}
      </div>
    </div>
  );
}
