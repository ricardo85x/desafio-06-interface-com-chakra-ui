## Create this objects on faunaDB

### Collections

# Continent:
{
    name: "continent",
    history_days: 30,
    ttl_days: null
}

# City:
{
    name: "city",
    history_days: 30,
    ttl_days: null
}

### Indexes

# City:

# city_by_continent
{
    name: "city_by_continent",
    unique: false,
    serialized: true,
    source: "city",
    terms: [
      {
        field: ["data", "continent"]
      }
    ]
}

# city_by_country
{
    name: "city_by_country",
    unique: false,
    serialized: true,
    source: "city",
    terms: [
      {
        field: ["data", "country"]
      }
    ]
}

# city_by_name
{
    name: "city_by_name",
    unique: true,
    serialized: true,
    source: "city",
    terms: [
      {
        field: ["data", "name"]
      }
    ]
}
# city_is_online
{
    name: "city_is_online",
    unique: false,
    serialized: true,
    source: "city",
    terms: [
      {
        field: ["data", "online"]
      }
    ]
}

## Continent:

# continent_by_local_id
{
    name: "continent_by_local_id",
    unique: true,
    serialized: true,
    source: "continent",
    terms: [
      {
        field: ["data", "local_id"]
      }
    ]
}

# continent_by_name
{
    name: "continent_by_name",
    unique: true,
    serialized: true,
    source: "continent",
    terms: [
      {
        field: ["data", "name"]
      }
    ]
}

# continent_is_online
{
    name: "continent_is_online",
    unique: false,
    serialized: true,
    source: "continent",
    terms: [
      {
        field: ["data", "online"]
      }
    ]
}