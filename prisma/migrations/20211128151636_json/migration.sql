-- RenameIndex
ALTER INDEX "Profile.userId_unique" RENAME TO "Profile_userId_key";

-- RenameIndex
ALTER INDEX "Props.componentId_unique" RENAME TO "Props_componentId_key";

-- RenameIndex
ALTER INDEX "Section.name_unique" RENAME TO "Section_name_key";

-- RenameIndex
ALTER INDEX "User.email_unique" RENAME TO "User_email_key";
