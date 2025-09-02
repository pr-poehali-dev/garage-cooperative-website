import Header from '@/components/Header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import Icon from '@/components/ui/icon'

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: 'Продается гараж №67',
      description: 'Продается гараж в отличном состоянии. Размеры 6x4м, высота 2.5м. Есть смотровая яма, электричество, вода. Недавно сделан косметический ремонт.',
      author: 'Николаев Н.Н.',
      contact: '+7 (999) 123-45-67',
      date: '2 сентября 2024',
      category: 'Продажа',
      price: '850 000 ₽',
      images: 3,
      views: 45,
      featured: true
    },
    {
      id: 2,
      title: 'Сдается гараж в аренду',
      description: 'Сдается гараж на длительный срок. Хорошее состояние, охраняемая территория. Возможно использование под склад.',
      author: 'Федоров Ф.Ф.',
      contact: '+7 (999) 234-56-78',
      date: '1 сентября 2024',
      category: 'Аренда',
      price: '5 000 ₽/мес',
      images: 2,
      views: 23,
      featured: false
    },
    {
      id: 3,
      title: 'Куплю гараж в кооперативе',
      description: 'Ищу гараж для покупки. Рассматриваю любые варианты, состояние не принципиально. Готов к быстрому оформлению сделки.',
      author: 'Морозов М.М.',
      contact: '+7 (999) 345-67-89',
      date: '31 августа 2024',
      category: 'Покупка',
      price: 'до 900 000 ₽',
      images: 0,
      views: 67,
      featured: false
    },
    {
      id: 4,
      title: 'Продается гараж №23 срочно',
      description: 'Срочная продажа в связи с переездом. Гараж угловой, увеличенной площади. Есть все коммуникации, хорошее состояние.',
      author: 'Козлов К.К.',
      contact: '+7 (999) 456-78-90',
      date: '30 августа 2024',
      category: 'Продажа',
      price: '750 000 ₽',
      images: 5,
      views: 89,
      featured: true
    },
    {
      id: 5,
      title: 'Предлагаю услуги по ремонту ворот',
      description: 'Выполняю ремонт и регулировку гаражных ворот. Замена замков, петель, покраска. Опыт работы более 10 лет.',
      author: 'Слесарь-механик',
      contact: '+7 (999) 567-89-01',
      date: '29 августа 2024',
      category: 'Услуги',
      price: 'от 1 500 ₽',
      images: 1,
      views: 34,
      featured: false
    },
    {
      id: 6,
      title: 'Меняю гараж на квартиру',
      description: 'Рассматриваю обмен гаража на 1-комнатную квартиру с доплатой. Гараж в отличном состоянии, со всеми удобствами.',
      author: 'Петрова А.А.',
      contact: '+7 (999) 678-90-12',
      date: '28 августа 2024',
      category: 'Обмен',
      price: 'Обсуждается',
      images: 4,
      views: 56,
      featured: false
    }
  ]

  const categories = ['Все', 'Продажа', 'Покупка', 'Аренда', 'Услуги', 'Обмен']

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Продажа':
        return 'bg-green-100 text-green-800'
      case 'Покупка':
        return 'bg-blue-100 text-blue-800'
      case 'Аренда':
        return 'bg-yellow-100 text-yellow-800'
      case 'Услуги':
        return 'bg-purple-100 text-purple-800'
      case 'Обмен':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Объявления</h1>
            <p className="text-xl text-muted-foreground">
              Купля-продажа гаражей и услуги для членов кооператива
            </p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="mt-4 lg:mt-0">
                <Icon name="Plus" size={16} className="mr-2" />
                Подать объявление
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Новое объявление</DialogTitle>
                <DialogDescription>
                  Заполните форму для размещения объявления
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Заголовок</Label>
                  <Input id="title" placeholder="Краткое описание объявления" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Категория</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sale">Продажа</SelectItem>
                      <SelectItem value="buy">Покупка</SelectItem>
                      <SelectItem value="rent">Аренда</SelectItem>
                      <SelectItem value="services">Услуги</SelectItem>
                      <SelectItem value="exchange">Обмен</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">Цена</Label>
                  <Input id="price" placeholder="Укажите стоимость" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Описание</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Подробное описание объявления"
                    rows={4}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact">Контактный телефон</Label>
                  <Input id="contact" placeholder="+7 (999) 123-45-67" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Отмена</Button>
                <Button type="submit">Опубликовать</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 lg:w-auto">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="sale">Продажа</TabsTrigger>
              <TabsTrigger value="buy">Покупка</TabsTrigger>
              <TabsTrigger value="rent">Аренда</TabsTrigger>
              <TabsTrigger value="services">Услуги</TabsTrigger>
              <TabsTrigger value="exchange">Обмен</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2 lg:ml-auto">
              <Input placeholder="Поиск объявлений..." className="w-full lg:w-64" />
              <Button variant="outline">
                <Icon name="Search" size={16} />
              </Button>
            </div>
          </div>

          <TabsContent value="all" className="space-y-6">
            {/* Featured Announcements */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center">
                <Icon name="Star" size={24} className="mr-2 text-yellow-500" />
                Рекомендуемые
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {announcements.filter(a => a.featured).map((announcement) => (
                  <Card key={announcement.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className={getCategoryColor(announcement.category)}>
                              {announcement.category}
                            </Badge>
                            <Badge variant="secondary">
                              <Icon name="Star" size={12} className="mr-1" />
                              Рекомендуемое
                            </Badge>
                          </div>
                          <CardTitle className="text-xl">{announcement.title}</CardTitle>
                          <CardDescription className="flex items-center space-x-4 mt-2">
                            <span>{announcement.author}</span>
                            <span>{announcement.date}</span>
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">{announcement.price}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {announcement.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Icon name="Eye" size={16} className="mr-1" />
                            {announcement.views}
                          </span>
                          {announcement.images > 0 && (
                            <span className="flex items-center">
                              <Icon name="Image" size={16} className="mr-1" />
                              {announcement.images}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Icon name="Phone" size={16} className="mr-2" />
                          Связаться
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Eye" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Heart" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Announcements */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Все объявления</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {announcements.map((announcement) => (
                  <Card key={announcement.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getCategoryColor(announcement.category)}>
                          {announcement.category}
                        </Badge>
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary">{announcement.price}</p>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{announcement.title}</CardTitle>
                      <CardDescription>
                        {announcement.author} • {announcement.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {announcement.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                          <span className="flex items-center">
                            <Icon name="Eye" size={14} className="mr-1" />
                            {announcement.views}
                          </span>
                          {announcement.images > 0 && (
                            <span className="flex items-center">
                              <Icon name="Image" size={14} className="mr-1" />
                              {announcement.images}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Icon name="Phone" size={14} className="mr-1" />
                          Позвонить
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="MessageCircle" size={14} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Share2" size={14} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Other tab contents would be filtered versions */}
          <TabsContent value="sale">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {announcements.filter(a => a.category === 'Продажа').map((announcement) => (
                <Card key={announcement.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getCategoryColor(announcement.category)}>
                        {announcement.category}
                      </Badge>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">{announcement.price}</p>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    <CardDescription>
                      {announcement.author} • {announcement.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{announcement.description}</p>
                    <Button size="sm" className="w-full">
                      <Icon name="Phone" size={14} className="mr-2" />
                      {announcement.contact}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Rules Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Info" size={24} className="mr-2" />
              Правила размещения объявлений
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Разрешается:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Продажа и покупка гаражей
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Сдача в аренду
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Предложение услуг по ремонту
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Обмен на недвижимость
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Запрещается:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="X" size={16} className="text-red-600 mr-2" />
                    Размещение коммерческой рекламы
                  </li>
                  <li className="flex items-center">
                    <Icon name="X" size={16} className="text-red-600 mr-2" />
                    Мошеннические схемы
                  </li>
                  <li className="flex items-center">
                    <Icon name="X" size={16} className="text-red-600 mr-2" />
                    Продажа запрещенных товаров
                  </li>
                  <li className="flex items-center">
                    <Icon name="X" size={16} className="text-red-600 mr-2" />
                    Нецензурная лексика
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Announcements