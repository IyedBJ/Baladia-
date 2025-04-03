import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, useTheme } from "@mui/material";

const Equipe = () => {
  const theme = useTheme();

  const rows = [
    {
      id: 1,
      nom: "Dupont",
      prenom: "Jean",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      categorie: "Administration",
      status: "Disponible",
    },
    {
      id: 2,
      nom: "Martin",
      prenom: "Sophie",
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      categorie: "Technique",
      status: "En congé",
    },
    {
      id: 3,
      nom: "Bernard",
      prenom: "Pierre",
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
      categorie: "Sécurité",
      status: "En mission",
    },
    {
      id: 4,
      nom: "Petit",
      prenom: "Marie",
      photo: "https://randomuser.me/api/portraits/women/4.jpg",
      categorie: "Administration",
      status: "Disponible",
    },
    {
      id: 5,
      nom: "Durand",
      prenom: "Luc",
      photo: "https://randomuser.me/api/portraits/men/5.jpg",
      categorie: "Technique",
      status: "En formation",
    },
    {
      id: 6,
      nom: "Leroy",
      prenom: "Julie",
      photo: "https://randomuser.me/api/portraits/women/6.jpg",
      categorie: "Culture",
      status: "Disponible",
    },
    {
      id: 7,
      nom: "Moreau",
      prenom: "Thomas",
      photo: "https://randomuser.me/api/portraits/men/7.jpg",
      categorie: "Sécurité",
      status: "En mission",
    },
    {
      id: 8,
      nom: "Simon",
      prenom: "Céline",
      photo: "https://randomuser.me/api/portraits/women/8.jpg",
      categorie: "Culture",
      status: "En congé",
    },
    {
      id: 9,
      nom: "Laurent",
      prenom: "David",
      photo: "https://randomuser.me/api/portraits/men/9.jpg",
      categorie: "Technique",
      status: "Disponible",
    },
    {
      id: 10,
      nom: "Lefebvre",
      prenom: "Sarah",
      photo: "https://randomuser.me/api/portraits/women/10.jpg",
      categorie: "Administration",
      status: "En formation",
    },
  ];

  const columns = [
    {
      field: "photo",
      headerName: "Photo",
      width: 100,
      renderCell: (params) => (
        <Avatar
          alt={`${params.row.prenom} ${params.row.nom}`}
          src={params.value}
        />
      ),
    },
    {
      field: "nom",
      headerName: "Nom",
      width: 150,
    },
    {
      field: "prenom",
      headerName: "Prénom",
      width: 150,
    },
    {
      field: "categorie",
      headerName: "Catégorie",
      width: 150,
    },
    {
      field: "status",
      headerName: "Statut",
      width: 130,
      renderCell: (params) => {
        let backgroundColor;
        switch (params.value) {
          case "Disponible":
            backgroundColor = theme.palette.success.main;
            break;
          case "En mission":
          case "En formation":
            backgroundColor = theme.palette.warning.main;
            break;
          case "En congé":
            backgroundColor = theme.palette.error.main;
            break;
          default:
            backgroundColor = theme.palette.info.main;
        }
        return (
          <div
            style={{
              backgroundColor,
              color: theme.palette.getContrastText(backgroundColor),
              padding: "2px 8px",
              borderRadius: "12px",
              fontSize: "0.7rem",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              height: "24px",
              lineHeight: "1",
              boxSizing: "border-box",
              width: "auto",
              minWidth: "fit-content",
              margin: "0 auto",
            }}
          >
            {params.value}
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default Equipe;
