import React from "react"

const useGetUserPermisssions = () => {
    // lógica para pegar as permissões dos usuarios
    return ['canSeeTitle']
}

interface PermissionGateProps {
    children: React.ReactNode;
    permission: string[];
}

const PermissionGate = ({ children, permission }: PermissionGateProps) => {
    const userPermissions = useGetUserPermisssions()

    if (permission.some(permission => userPermissions.includes(permission))) {
        return <>{children}</>;
    }

    return <></>
}

export default PermissionGate
