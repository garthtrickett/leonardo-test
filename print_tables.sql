DO $$ 
DECLARE 
   _tbl text; 
   _info text;
BEGIN 
   FOR _tbl IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') 
   LOOP 
      RAISE INFO 'Table: %', _tbl; 
      FOR _info IN (SELECT column_name || ' ' || data_type || ' ' || is_nullable FROM information_schema.columns WHERE table_name = _tbl)
      LOOP
         RAISE INFO 'Column: %', _info;
      END LOOP;
   END LOOP; 
END $$;
