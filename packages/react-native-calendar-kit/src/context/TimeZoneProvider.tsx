import React, { useMemo } from 'react';
import type { PropsWithChildren } from 'react';

export interface TimezoneContextProps {
  timeZone: string;
  nowIndicatorTimezone: string,
}

const TimezoneContext = React.createContext<TimezoneContextProps | undefined>(
  undefined
);

const TimezoneProvider: React.FC<PropsWithChildren<{ timeZone: string, nowIndicatorTimezone: string }>> = ({
  children,
  timeZone,
  nowIndicatorTimezone,
}) => {
  const value = useMemo(() => ({ timeZone, nowIndicatorTimezone }), [timeZone, nowIndicatorTimezone]);

  return (
    <TimezoneContext.Provider value={value}>
      {children}
    </TimezoneContext.Provider>
  );
};

export default TimezoneProvider;

export const useTimezone = () => {
  const context = React.useContext(TimezoneContext);

  if (context === undefined) {
    throw new Error('TimeZoneContext is not available');
  }

  return context;
};
