public with sharing class ContactController {
    @AuraEnabled
    public static void saveContactRequest(String name, String email, String message) {
        try {
            Contact_Request__c req = new Contact_Request__c();
            req.Name = name;
            req.Sender_Email__c = email;
            req.Message__c = message;
            
            insert req; // This creates the record and triggers your Flow!
        } catch (Exception e) {
            throw new AuraHandledException('Something went wrong: ' + e.getMessage());
        }
    }
}