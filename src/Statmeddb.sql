/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para statmedDb
CREATE DATABASE IF NOT EXISTS `statmedDb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `statmedDb`;

-- Copiando estrutura para tabela statmedDb.Atendimento
CREATE TABLE IF NOT EXISTS `Atendimento` (
  `idAtendimento` int NOT NULL AUTO_INCREMENT,
  `Usuario_idFunc` varchar(50) DEFAULT NULL,
  `Usuario_crm` varchar(45) DEFAULT NULL,
  `PacienteidSame` int NOT NULL,
  `data` date NOT NULL,
  `cid` varchar(30) DEFAULT NULL,
  `epidemia` varchar(5) DEFAULT NULL,
  `atestado` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `anamnese` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `relatorio` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `encaminhamento` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `receita` mediumtext,
  PRIMARY KEY (`idAtendimento`),
  KEY `fk_Usuario_has_paciente_paciente2_idx` (`PacienteidSame`) USING BTREE,
  CONSTRAINT `atendimento_paciente` FOREIGN KEY (`PacienteidSame`) REFERENCES `Paciente` (`idSame`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela statmedDb.CID10
CREATE TABLE IF NOT EXISTS `CID10` (
  `idCid` varchar(255) NOT NULL,
  `descr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`idCid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela statmedDb.Paciente
CREATE TABLE IF NOT EXISTS `Paciente` (
  `idSame` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `nomeSocial` varchar(50) DEFAULT NULL,
  `genero` varchar(10) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `cpf` varchar(14) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `dataNasc` date NOT NULL,
  `cep` varchar(10) NOT NULL,
  `rua` varchar(70) NOT NULL,
  `bairro` varchar(45) NOT NULL,
  `cidade` varchar(60) NOT NULL,
  `numero` int NOT NULL,
  `uf` varchar(2) NOT NULL,
  `complemento` varchar(45) DEFAULT NULL,
  `prateleira` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Sem local',
  PRIMARY KEY (`idSame`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela statmedDb.Usuario
CREATE TABLE IF NOT EXISTS `Usuario` (
  `idFunc` int NOT NULL,
  `crm` varchar(45) DEFAULT NULL,
  `nome` varchar(50) NOT NULL,
  `login` varchar(15) NOT NULL,
  `senhaHash` char(255) NOT NULL,
  `senhaSalt` char(255) NOT NULL,
  `idCargo` int NOT NULL,
  `dataNasc` date NOT NULL,
  `cpf` varchar(45) NOT NULL,
  PRIMARY KEY (`idFunc`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
