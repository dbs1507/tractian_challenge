"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  IconConditionMonitoring,
  IconVibration,
  IconAiFailure,
  IconReliability,
  IconDowntime,
  IconSensorSpecs,
  IconCmms,
  IconTroubleshooting,
  IconWorkOrder,
  IconInventory,
  IconPreventive,
  IconIntegrations,
  IconOee,
  IconAiProduction,
  IconOperator,
  IconQuality,
  IconDashboards,
  IconUtility,
} from "../icons";
import { MenuIconFigure, SolutionMenuArrow } from "./shared";

function SolutionSubLink({
  href,
  title,
  desc,
  onClose,
  icon,
}: {
  href: string;
  title: string;
  desc: string;
  onClose: () => void;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex w-full items-center gap-2"
      onClick={onClose}
    >
      <MenuIconFigure>{icon}</MenuIconFigure>
      <article className="flex flex-1 flex-col leading-[1.6]">
        <div className="flex items-center gap-2">
          <p className="text-[14px] text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700">
            {title}
          </p>
          <SolutionMenuArrow />
        </div>
        <p className="text-tag text-[12px] text-slate-500">{desc}</p>
      </article>
    </Link>
  );
}

function MobileSectionLink({
  href,
  title,
  icon,
  onClose,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      className="group flex w-full items-center gap-3 py-2"
      onClick={onClose}
    >
      <MenuIconFigure>{icon}</MenuIconFigure>
      <p className="text-sm text-slate-500">
        {title}
      </p>
    </Link>
  );
}

function MobileSubLink({
  href,
  title,
  desc,
  icon,
  onClose,
}: {
  href: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      className="group flex w-full items-start gap-2 py-2 "
      onClick={onClose}
    >
      <MenuIconFigure>{icon}</MenuIconFigure>
      <article className="flex flex-1 flex-col gap-0.5">
        <p className="text-sm text-slate-500">
          {title}
        </p>
        <p className="text-xs text-slate-500">{desc}</p>
      </article>
    </Link>
  );
}

export function SolutionsDropdown({
  onClose,
  variant = "desktop",
}: {
  onClose: () => void;
  variant?: "desktop" | "mobile";
}) {
  const tf = useTranslations("footer");

  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-6 py-4">
        {/* Tractian Condition Monitoring */}
        <div className="flex flex-col gap-1">
          <MobileSectionLink
            href="/solutions/condition-monitoring"
            title={tf("sectionCM")}
            icon={<IconConditionMonitoring />}
            onClose={onClose}
          />
          <div className="flex flex-col border-l border-slate-200 pl-3">
            <MobileSubLink href="/solutions/condition-monitoring/vibration-analysis" title={tf("cmVibration")} desc="All the tools you need to remotely monitor machine health." icon={<IconVibration />} onClose={onClose} />
            <MobileSubLink href="/solutions/condition-monitoring/ai-powered-condition-monitoring" title={tf("cmAiDetection")} desc="Spot issues early, trigger automatic alerts." icon={<IconAiFailure />} onClose={onClose} />
            <MobileSubLink href="/solutions/condition-monitoring/root-cause-and-reliability" title={tf("cmReliability")} desc="Get to the why faster, build your reliability program." icon={<IconReliability />} onClose={onClose} />
            <MobileSubLink href="/solutions/condition-monitoring/downtime-prevention-and-reporting" title={tf("cmDowntime")} desc="Uncover failure trends, act before breakdowns happen." icon={<IconDowntime />} onClose={onClose} />
            <MobileSubLink href="/solutions/condition-monitoring/sensor-specifications" title={tf("cmSensorSpecs")} desc="Monitor real-time vibration, temperature, runtime, and RPM." icon={<IconSensorSpecs />} onClose={onClose} />
          </div>
        </div>

        {/* Tractian CMMS */}
        <div className="flex flex-col gap-1">
          <MobileSectionLink
            href="/solutions/cmms"
            title={tf("sectionCMMS")}
            icon={<IconCmms />}
            onClose={onClose}
          />
          <div className="flex flex-col border-l border-slate-200 pl-3">
            <MobileSubLink href="/solutions/cmms/maintenance-sop" title={tf("cmmsTroubleshooting")} desc="Guide technicians with smart SOPs and checklists." icon={<IconTroubleshooting />} onClose={onClose} />
            <MobileSubLink href="/solutions/cmms/work-order-software" title={tf("cmmsWorkOrder")} desc="Plan, assign, and track every work order in one place." icon={<IconWorkOrder />} onClose={onClose} />
            <MobileSubLink href="/solutions/cmms/inventory-management-software" title={tf("cmmsInventory")} desc="Track critical parts and link them to maintenance tasks." icon={<IconInventory />} onClose={onClose} />
            <MobileSubLink href="/solutions/cmms/preventive-maintenance-software" title={tf("cmmsPreventive")} desc="Automate tasks, prevent failures, and cut downtime." icon={<IconPreventive />} onClose={onClose} />
            <MobileSubLink href="/solutions/integrations" title={tf("sectionIntegrations")} desc="Connect Tractian with ERPs, sensors, and data systems." icon={<IconIntegrations />} onClose={onClose} />
          </div>
        </div>

        {/* Tractian OEE */}
        <div className="flex flex-col gap-1">
          <MobileSectionLink
            href="/solutions/oee"
            title={tf("sectionOEE")}
            icon={<IconOee />}
            onClose={onClose}
          />
          <div className="flex flex-col border-l border-slate-200 pl-3">
            <MobileSubLink href="/solutions/oee/ai-production-tracking" title={tf("oeeTracking")} desc="Get status of production, lines, stations with live insights." icon={<IconAiProduction />} onClose={onClose} />
            <MobileSubLink href="/solutions/oee/operator-performance" title={tf("oeeOperator")} desc="Connect and empower the frontline." icon={<IconOperator />} onClose={onClose} />
            <MobileSubLink href="/solutions/oee/digitalized-quality" title={tf("oeeQuality")} desc="Take quality forms and measurements digital." icon={<IconQuality />} onClose={onClose} />
            <MobileSubLink href="/solutions/oee/custom-dashboards" title={tf("oeeDashboards")} desc="Drive operations with real-time data reports." icon={<IconDashboards />} onClose={onClose} />
            <MobileSubLink href="/solutions/oee/energy-trac" title={tf("oeeUtility")} desc="Analyze energy consumption and process metrics." icon={<IconUtility />} onClose={onClose} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full gap-4 lg:justify-between">
      <div className="flex w-full flex-col gap-6 border-l border-slate-300 pl-4">
        <Link
          href="/solutions/condition-monitoring"
          className="group flex w-full items-center gap-2"
          onClick={onClose}
        >
          <MenuIconFigure>
            <IconConditionMonitoring />
          </MenuIconFigure>
          <article className="flex flex-1 flex-col">
            <div className="flex items-center gap-2">
              <p className="text-body-lg text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700">
                {tf("sectionCM")}
              </p>
              <SolutionMenuArrow />
            </div>
          </article>
        </Link>
        <div className="flex w-full flex-col gap-4">
          <SolutionSubLink href="/solutions/condition-monitoring/vibration-analysis" title={tf("cmVibration")} desc="All the tools you need to remotely monitor machine health." onClose={onClose} icon={<IconVibration />} />
          <SolutionSubLink href="/solutions/condition-monitoring/ai-powered-condition-monitoring" title={tf("cmAiDetection")} desc="Spot issues early, trigger automatic alerts." onClose={onClose} icon={<IconAiFailure />} />
          <SolutionSubLink href="/solutions/condition-monitoring/root-cause-and-reliability" title={tf("cmReliability")} desc="Get to the why faster, build your reliability program." onClose={onClose} icon={<IconReliability />} />
          <SolutionSubLink href="/solutions/condition-monitoring/downtime-prevention-and-reporting" title={tf("cmDowntime")} desc="Uncover failure trends, act before breakdowns happen." onClose={onClose} icon={<IconDowntime />} />
          <SolutionSubLink href="/solutions/condition-monitoring/sensor-specifications" title={tf("cmSensorSpecs")} desc="Monitor real-time vibration, temperature, runtime, and RPM." onClose={onClose} icon={<IconSensorSpecs />} />
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 border-l border-slate-300 pl-4">
        <Link
          href="/solutions/cmms"
          className="group flex w-full items-center gap-2"
          onClick={onClose}
        >
          <MenuIconFigure>
            <IconCmms />
          </MenuIconFigure>
          <article className="flex flex-1 flex-col">
            <div className="flex items-center gap-2">
              <p className="text-body-lg text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700">
                {tf("sectionCMMS")}
              </p>
              <SolutionMenuArrow />
            </div>
          </article>
        </Link>
        <div className="flex w-full flex-col gap-4">
          <SolutionSubLink href="/solutions/cmms/maintenance-sop" title={tf("cmmsTroubleshooting")} desc="Guide technicians with smart SOPs and checklists." onClose={onClose} icon={<IconTroubleshooting />} />
          <SolutionSubLink href="/solutions/cmms/work-order-software" title={tf("cmmsWorkOrder")} desc="Plan, assign, and track every work order in one place." onClose={onClose} icon={<IconWorkOrder />} />
          <SolutionSubLink href="/solutions/cmms/inventory-management-software" title={tf("cmmsInventory")} desc="Track critical parts and link them to maintenance tasks." onClose={onClose} icon={<IconInventory />} />
          <SolutionSubLink href="/solutions/cmms/preventive-maintenance-software" title={tf("cmmsPreventive")} desc="Automate tasks, prevent failures, and cut downtime." onClose={onClose} icon={<IconPreventive />} />
          <SolutionSubLink href="/solutions/integrations" title={tf("sectionIntegrations")} desc="Connect Tractian with ERPs, sensors, and data systems." onClose={onClose} icon={<IconIntegrations />} />
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 border-l border-slate-300 pl-4">
        <Link
          href="/solutions/oee"
          className="group flex w-full items-center gap-2"
          onClick={onClose}
        >
          <MenuIconFigure>
            <IconOee />
          </MenuIconFigure>
          <article className="flex flex-1 flex-col">
            <div className="flex items-center gap-2">
              <p className="text-body-lg text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700">
                {tf("sectionOEE")}
              </p>
              <SolutionMenuArrow />
            </div>
          </article>
        </Link>
        <div className="flex w-full flex-col gap-4">
          <SolutionSubLink href="/solutions/oee/ai-production-tracking" title={tf("oeeTracking")} desc="Get status of production, lines, stations with live insights." onClose={onClose} icon={<IconAiProduction />} />
          <SolutionSubLink href="/solutions/oee/operator-performance" title={tf("oeeOperator")} desc="Connect and empower the frontline." onClose={onClose} icon={<IconOperator />} />
          <SolutionSubLink href="/solutions/oee/digitalized-quality" title={tf("oeeQuality")} desc="Take quality forms and measurements digital." onClose={onClose} icon={<IconQuality />} />
          <SolutionSubLink href="/solutions/oee/custom-dashboards" title={tf("oeeDashboards")} desc="Drive operations with real-time data reports." onClose={onClose} icon={<IconDashboards />} />
          <SolutionSubLink href="/solutions/oee/energy-trac" title={tf("oeeUtility")} desc="Analyze energy consumption and process metrics." onClose={onClose} icon={<IconUtility />} />
        </div>
      </div>
    </div>
  );
}
