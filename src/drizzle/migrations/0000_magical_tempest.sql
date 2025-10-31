CREATE TABLE `admin_roles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`role_name` varchar(255) NOT NULL,
	`permission` json NOT NULL DEFAULT ('[]'),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `admin_roles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `admins` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(191),
	`email` varchar(150) NOT NULL,
	`hash_password` varchar(255),
	`role_id` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `admins_id` PRIMARY KEY(`id`),
	CONSTRAINT `admins_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `admin_tokens` (
	`id` int AUTO_INCREMENT NOT NULL,
	`token` text,
	`user_id` int NOT NULL,
	`expires_at` timestamp NOT NULL,
	CONSTRAINT `admin_tokens_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contact` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(45) NOT NULL,
	`email` varchar(45) NOT NULL,
	`phone` varchar(45) NOT NULL,
	`company` varchar(45) NOT NULL,
	`message` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contact_id` PRIMARY KEY(`id`),
	CONSTRAINT `contact_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `admins` ADD CONSTRAINT `admins_role_id_admin_roles_id_fk` FOREIGN KEY (`role_id`) REFERENCES `admin_roles`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `admin_tokens` ADD CONSTRAINT `admin_tokens_user_id_admins_id_fk` FOREIGN KEY (`user_id`) REFERENCES `admins`(`id`) ON DELETE no action ON UPDATE no action;