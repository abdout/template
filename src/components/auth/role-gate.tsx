"use client";

import { UserRole } from "@prisma/client";
import { useCurrentRole } from "@/components/auth/use-current-role";
import { FormError } from "@/components/auth/error/form-error";



interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
};

export const RoleGate = ({
  children,
  allowedRole,
}: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    )
  }

  return (
    <>
      {children}
    </>
  );
};
