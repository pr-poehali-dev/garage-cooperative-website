import Header from '@/components/Header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Icon from '@/components/ui/icon'

const Documents = () => {
  const documents = [
    {
      id: 1,
      name: 'Устав ГСК "Южный-2"',
      description: 'Основной учредительный документ кооператива',
      date: '15.01.2024',
      size: '2.4 МБ',
      type: 'PDF',
      category: 'Уставные документы',
      version: '2024.1'
    },
    {
      id: 2,
      name: 'Положение о членских взносах',
      description: 'Размеры и порядок уплаты взносов',
      date: '20.03.2024',
      size: '1.2 МБ',
      type: 'PDF',
      category: 'Финансовые документы',
      version: '2024.1'
    },
    {
      id: 3,
      name: 'Протокол общего собрания от 15.07.2024',
      description: 'Решения по ремонту кровли и благоустройству',
      date: '15.07.2024',
      size: '856 КБ',
      type: 'PDF',
      category: 'Протоколы собраний',
      version: '1.0'
    },
    {
      id: 4,
      name: 'Правила внутреннего распорядка',
      description: 'Режим работы, правила пользования территорией',
      date: '01.02.2024',
      size: '1.8 МБ',
      type: 'PDF',
      category: 'Регламентирующие документы',
      version: '2024.1'
    },
    {
      id: 5,
      name: 'Смета расходов на 2024 год',
      description: 'Плановые расходы на содержание и развитие',
      date: '10.01.2024',
      size: '945 КБ',
      type: 'XLSX',
      category: 'Финансовые документы',
      version: '2024.1'
    },
    {
      id: 6,
      name: 'Договор с управляющей компанией',
      description: 'Соглашение об оказании услуг по управлению',
      date: '05.01.2024',
      size: '2.1 МБ',
      type: 'PDF',
      category: 'Договоры',
      version: '2024.1'
    },
    {
      id: 7,
      name: 'Акт приемки работ по благоустройству',
      description: 'Документ о выполненных работах по асфальтированию',
      date: '25.08.2024',
      size: '1.5 МБ',
      type: 'PDF',
      category: 'Акты работ',
      version: '1.0'
    },
    {
      id: 8,
      name: 'Реестр членов кооператива',
      description: 'Актуальный список владельцев гаражей',
      date: '01.09.2024',
      size: '743 КБ',
      type: 'XLSX',
      category: 'Реестры',
      version: '2024.9'
    }
  ]

  const categories = [
    'Все документы',
    'Уставные документы',
    'Финансовые документы', 
    'Протоколы собраний',
    'Регламентирующие документы',
    'Договоры',
    'Акты работ',
    'Реестры'
  ]

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return 'FileText'
      case 'XLSX':
        return 'Sheet'
      case 'DOC':
        return 'FileText'
      default:
        return 'File'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF':
        return 'bg-red-100 text-red-800'
      case 'XLSX':
        return 'bg-green-100 text-green-800'
      case 'DOC':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Документы</h1>
          <p className="text-xl text-muted-foreground">
            Уставные документы, протоколы собраний и другие важные материалы ГСК "Южный-2"
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Input
                  placeholder="Поиск документов..."
                  className="w-full"
                />
              </div>
              <Button>
                <Icon name="Search" size={16} className="mr-2" />
                Найти
              </Button>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">КАТЕГОРИИ</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === 'Все документы' ? 'default' : 'outline'}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {documents.map((doc) => (
            <Card key={doc.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <Icon 
                      name={getDocumentIcon(doc.type)} 
                      size={32} 
                      className="text-primary flex-shrink-0" 
                    />
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-lg leading-tight">{doc.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {doc.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end flex-shrink-0 ml-4">
                    <Badge 
                      className={`text-xs ${getTypeColor(doc.type)}`}
                      variant="secondary"
                    >
                      {doc.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      v{doc.version}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span className="flex items-center">
                    <Icon name="Calendar" size={16} className="mr-1" />
                    {doc.date}
                  </span>
                  <span className="flex items-center">
                    <Icon name="HardDrive" size={16} className="mr-1" />
                    {doc.size}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Просмотр
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Share2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upload Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Upload" size={24} className="mr-2" />
              Загрузка документов
            </CardTitle>
            <CardDescription>
              Для членов правления: загрузите новые документы
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
              <Icon name="FileUp" size={48} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Перетащите файлы сюда</h3>
              <p className="text-muted-foreground mb-4">
                или нажмите для выбора файлов (PDF, DOC, XLSX)
              </p>
              <Button variant="outline">
                <Icon name="Folder" size={16} className="mr-2" />
                Выбрать файлы
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card>
          <CardContent className="p-8">
            <div className="text-center">
              <Icon name="HelpCircle" size={48} className="mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Нужна помощь?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Если у вас возникли проблемы с доступом к документам или вам нужна 
                дополнительная информация, обратитесь в правление кооператива
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
                <Button variant="outline">
                  <Icon name="Mail" size={16} className="mr-2" />
                  documents@gsk-south2.ru
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Documents